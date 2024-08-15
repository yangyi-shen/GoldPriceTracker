import sql from './db.js'
import nodemailer from 'nodemailer'

async function saveEmail(address) {
    // save email address
    await sql`INSERT INTO emails VALUES (${address});`
    await sql.end();
}


async function sendEmail(oldPrice, newPrice, address) {
    // send email to single address
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "yyshen.projects@gmail.com",
            pass: "GENERATE LATER",
        },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Gold Price Tracker 👑" <yyshen.projects@gmail.com>', // sender address
        to: address, // list of receivers
        subject: "The price of gold has changed", // Subject line
        text: `The prise has risen from ${oldPrice} to ${newPrice}`, // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

function sendEmailAll(oldPrice, newPrice) {
    // send email to all emails in database
}

sendEmail(100, 120, 'mrshenyangyi@gmail.com').catch(console.error);

export default { saveEmail, sendEmail, sendEmailAll }