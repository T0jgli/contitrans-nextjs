import { check, validationResult } from "express-validator";
import { transport } from "../../lib/helpers/ApiHelper";
import logger from "../../lib/helpers/Logger";
import { initMiddleware, validateMiddleware } from "../../lib/helpers/middlewares";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(transport);

const validateBody = initMiddleware(
    validateMiddleware(
        [check("subject").trim().escape(), check("email").trim().escape(), check("name").trim().escape(), check("message").trim().escape()],
        validationResult
    )
);

export default async function formHandler(req, res) {
    if (req.method === "POST") {
        await validateBody(req, res);

        const { subject, name, email, message } = req.body;
        try {
            const mail = {
                from: `"Kapcsolat – ${name}" "admin@contibus.hu"`,
                to: process.env.NODE_ENV == "production" ? "buszrendeles@contibus.hu" : "admin@contibus.hu",
                subject: `Kapcsolat > contibus.hu ${subject ? "| " + subject : ""}`,
                replyTo: email,
                html: ` <html><body>
                <h2>Kapcsolat űrlap a contibus.hu-n keresztül</h2>
                <hr width="50%" style="margin-left: 0">
                <p><span style="font-weight: bolder;">Név:</span> ${name}</p>
                <p><span style="font-weight: bolder;">Email cím:</span> ${email}</p>
                <p><span style="font-weight: bolder;">Tárgy:</span> ${subject || "Nincs"}</p>
                <br>
                <p><span style="font-weight: bolder;">Üzenet:</span> ${message}</p>
                </body>
                </html> `,
            };
            transporter.verify((error) => {
                if (error) {
                    logger("error", error);
                } else {
                    logger("email", "Pörgünk, megyünk, nyomjuk! (kapcsolat)");
                }
            });
            await transporter.sendMail(mail);
            logger("email", "elküldve (kapcsolat)");
            res.status(200).json({
                status: "success",
            });
        } catch (error) {
            logger("error", error);

            res.status(500).json({
                error: error,
            });
        }
    } else {
        res.send("Rossz helyen jarsz");
    }
    res.end();
}
