import express from "express";
import cors from 'cors';

import emailUtils from "./email.utils.js";

const PORT = 6900;
const app = express();
app.use(cors());

app.post('/email/save', async (req, res) => {
    try {
        const address = req.query.address;
        await emailUtils.saveEmail(address);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
})

app.delete('/email/delete', async (req, res) => {
    try {
        const address = req.query.address;
        await emailUtils.deleteEmail(address);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})