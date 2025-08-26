const mongoose = require('mongoose');
const shortId = require('shortid');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, default: shortId.generate },
  clicks: { type: Number, default: 0 },
});

module.exports = mongoose.model('Url', urlSchema);
