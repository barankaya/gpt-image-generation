require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const { OPENAI_API_KEY } = process.env;

// OpenAI API configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY
});

app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => {
    console.log("server started");
});

app.post("/create", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512",
        });
        res.send(response.data.data[0].url);
    } catch (err) {
        res.send(err.message);
    }
});