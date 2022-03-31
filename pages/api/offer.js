import { transport } from "../../lib/helpers/ApiHelper";
import logger from "../../lib/helpers/Logger";
import db from "../../lib/firebase";
import firebase from "firebase/app";
import { initMiddleware, validateMiddleware } from "../../lib/helpers/middlewares";
import { check, validationResult } from "express-validator";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

const validateBody = initMiddleware(
    validateMiddleware(
        [
            check("name").trim().escape(),
            check("phone").trim().escape(),
            check("email").trim().escape(),
            check("uticel").trim().escape(),
            check("koltseg").trim().escape(),
            check("indulas").trim().escape(),
            check("erkezes").trim().escape(),
            check("selectedbus").trim().escape(),
            check("seat").trim().escape(),
            check("comment").trim().escape(),
        ],
        validationResult
    )
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { name, phone, email, uticel, koltseg, indulas, erkezes, selectedbus, seat, comment, newsletter } = req.body;
        let success = false;
        try {
            const mail = {
                from: `"Ajánlatkérés – ${name}" "admin@contibus.hu"`,
                to: process.env.NODE_ENV == "production" ? "buszrendeles@contibus.hu" : "admin@contibus.hu",
                subject: "Autóbusz ajánlatkérés > contibus.hu",
                replyTo: email,
                /*attachments: req.body.file
                    ? [
                          {
                              filename: req.body.filename,
                              content: req.body.file,
                              encoding: "base64",
                          },
                      ]
                    : null,*/
                html: ` <html><body>
                <h2>Ajánlatkérő űrlap a contibus.hu-n keresztül</h2>
                <hr width="50%" style="margin-left: 0">
                <p><span style="font-weight: bolder;">Megrendelő neve:</span> ${name}</p>
                <p><span style="font-weight: bolder;">Telefonszám:</span> ${phone}</p>
                <p><span style="font-weight: bolder;">Email cím:</span> ${email}</p>
                <p><span style="font-weight: bolder;">Úticél:</span> ${uticel}</p>
                <p><span style="font-weight: bolder;">Tervezett költségkeret:</span> ${koltseg}</p>
                <p><span style="font-weight: bolder;">Indulás napja:</span> ${indulas}</p>
                <p><span style="font-weight: bolder;">Érkezés napja:</span> ${erkezes}</p>
                <p><span style="font-weight: bolder;">Kiválasztott busz:</span> ${selectedbus || "Nincs"}</p>
                <p><span style="font-weight: bolder;">Férőhely:</span> ${seat}</p>
                <br>
                <p><span style="font-weight: bolder;">Rövid leírás:</span> ${comment}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (ajánlatkérés)");
                }
            });
            await transporter.sendMail(mail);
            success = true;
            logger("email", "elküldve (ajánlatkérés)");

            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: "Error",
            });
        } finally {
            db.collection("formofferusers").add({
                name: name,
                phone: phone,
                email: email,
                uticel: uticel,
                koltseg: koltseg,
                indulas: new Date(indulas).toLocaleDateString(),
                erkezes: new Date(erkezes).toLocaleDateString(),
                selectedbus: selectedbus || "Nincs",
                seat: seat,
                comment: comment,
                sent: success,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            if (newsletter) {
                db.collection("newsletterusers").doc(email).set({
                    name: name,
                    phone: phone,
                    email: email,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
            }
        }
    } else {
        res.send("Rossz helyen jarsz");
    }
    res.end();
}
