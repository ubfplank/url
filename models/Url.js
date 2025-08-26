import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);
export default Url;
