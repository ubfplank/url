import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Url from "./models/Url.js"; // modelo da URL

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

// rota para criar URL curta de teste
app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 8);
  const newUrl = new Url({ originalUrl, shortUrl });
  await newUrl.save();
  res.json(newUrl);
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando na porta 3000"));

