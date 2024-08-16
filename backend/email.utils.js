import postgres from "postgres"
import nodemailer from 'nodemailer'
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL

async function saveEmail(address) {
    const sql = postgres(connectionString)
    
    // save email address
    await sql`INSERT INTO emails VALUES (${address});`;
    await sql.end();
}

async function deleteEmail(address) {
    const sql = postgres(connectionString)

    // delete email address
    await sql`DELETE FROM emails WHERE address = ${address};`;
    await sql.end();
}

async function sendEmail(oldPrice, newPrice, address) {
    // send email to single address
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // use `true` for port 465, `false` for all other ports
        auth: {
            user: "yyshen.projects@gmail.com",
            pass: process.env.SMTP_PASS,
        },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Gold Price Tracker 👑" <yyshen.projects@gmail.com>',
        to: address,
        subject: "The price of gold has changed", 
        text: `The prise has risen from ${oldPrice} to ${newPrice}`,
        html: "<b>Hello world?</b> To unsubscribe, click <a href='goldpricetracker.yyshen.com/unsubscribe.html'>here</a>.",
    });

    console.log("Message sent: %s", info.messageId);
}

async function sendEmailAll(oldPrice, newPrice) {
    const sql = postgres(connectionString)

    // retrieve list of emails from database
    const emails = await sql`SELECT * FROM emails;`
    await sql.end();

    // loop over emails
    for (const email of emails) {
        const address = email.address;
        sendEmail(oldPrice, newPrice, address);
    }
}

deleteEmail('amongus.sussy@baka')

export default { saveEmail, deleteEmail, sendEmail, sendEmailAll }