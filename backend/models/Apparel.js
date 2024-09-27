const mongoose = require('mongoose');

const apparelSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    contactInfo: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    dateSubmitted: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Apparel', apparelSchema);
