// models/Url.js
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  original: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

import Url from './models/Url.js';
const Url = require('./models/Url');


export default Url;
