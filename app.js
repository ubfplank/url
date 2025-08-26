import express from "express";
import mongoose from "mongoose";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import Url from './models/Url.js';

dotenv.config();
const Url = require('./models/Url');


const app = express();
app.use(express.json());

// conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// schema do encurtador
const urlSchema = new mongoose.Schema({
  shortId: { type: String, unique: true },
  originalUrl: String,
});

const Url = mongoose.model("Url", urlSchema);

// rota para encurtar
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = nanoid(7);

  const newUrl = await Url.create({ shortId, originalUrl });
  res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}`, originalUrl });
});

// rota para redirecionar
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).json({ error: "URL não encontrada" });
  }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
