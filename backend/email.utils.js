import sql from './db.js'

async function saveEmail(address) {
    // save email address
    await sql`INSERT INTO emails VALUES (${address});`
    await sql.end();
}

function sendEmail(oldPrice, newPrice, address) {
    // send email to single address
}

function sendEmailAll(oldPrice, newPrice) {
    // send email to all emails in database
}

export default {saveEmail, sendEmail, sendEmailAll}