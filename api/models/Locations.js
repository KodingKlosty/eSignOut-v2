const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
    },
    teams: {
        type: Array
    },
    orgId:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;