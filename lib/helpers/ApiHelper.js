export const transport = {
    host: "mail.contibus.hu",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_SENDGRID_USER,
        pass: process.env.NEXT_PUBLIC_SENDGRID_PASS,
    },
};
