const mongoose = require('mongoose');

const OrgSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    locations: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Org = mongoose.model('Org', OrgSchema);

module.exports = Org;