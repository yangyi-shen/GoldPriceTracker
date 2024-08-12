import express from "express";

import emailUtils from "./email.utils.js";

const PORT = 6900;
const app = express();

app.post('/email/save', async (req, res) => {
    const address = req.query.address;
    await emailUtils.saveEmail(address)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})