// models/Url.js
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const Url = mongoose.model('Url', urlSchema);

export default Url;
