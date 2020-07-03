const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
        unique: true
    },
    teams: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;