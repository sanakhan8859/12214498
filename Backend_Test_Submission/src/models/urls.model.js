const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true
  },
  shortcode: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  expiry: {
    type: Date,
    required: true
  }
});

const UrlModel = mongoose.model('ShortUrl', urlSchema);

module.exports = UrlModel;
