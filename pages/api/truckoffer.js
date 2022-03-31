import { transport } from "../../lib/helpers/ApiHelper";
import logger from "../../lib/helpers/Logger";
import db from "../../lib/firebase";
import firebase from "firebase/app";
import { initMiddleware, validateMiddleware } from "../../lib/helpers/middlewares";
import { check, validationResult } from "express-validator";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

const validateBody = initMiddleware(
    validateMiddleware([check("name").trim().escape(), check("email").trim().escape(), check("message").trim().escape()], validationResult)
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { name, email, truck, message } = req.body;
        let success = false;
        try {
            const mail = {
                from: `"Teherautó rendelés – ${name}" "admin@contibus.hu"`,
                to: process.env.NODE_ENV == "production" ? "buszrendeles@contibus.hu" : "admin@contibus.hu",
                subject: `Teherautórendelés > contibus.hu`,
                replyTo: email,
                html: ` <html><body style="text-align: center;">
                <h1>Teherautórendelés űrlap a contibus.hu-n keresztül</h1>
                <hr>
                <p style="font-weight: bold;">Név:</p><p style="padding-bottom: 20px">${name}</p>
                <p style="font-weight: bold;">Email cím:</p><p style="padding-bottom: 20px">${email}</p>
                <p style="font-weight: bold;">Adatok a teherautóról:</p>
                <p>Márka: ${truck.truck}</p>
                <p>Leírás: ${truck.desc}</p>
                <br>
                <p style="font-weight: bold;">Üzenet:</p><p>${message}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (teherautó rendelés)");
                }
            });
            await transporter.sendMail(mail);
            success = true;
            logger("email", "elküldve (teherautó rendelés)");

            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: "Error",
            });
        } finally {
            db.collection("truckofferusers").add({
                name: name,
                email: email,
                message: message,
                truckID: truck.id,
                truck: truck.truck,
                desc: truck.desc,
                message: message,
                sent: success,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
    } else {
        res.send("Rossz helyen jarsz");
    }
    res.end();
}
