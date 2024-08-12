import express from "express";

const PORT = 6900;
const app = express();

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})