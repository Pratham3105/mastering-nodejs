const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{ timestamp: { type: Number}}],
    date: {
        type: Date,
        default: Date.now
    }
},{ timestamps: true});

module.exports = mongoose.model('Url', urlSchema);