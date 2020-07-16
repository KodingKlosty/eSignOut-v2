const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    members: {
        type: Array
    },
    locationId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;