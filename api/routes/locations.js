const express = require('express');
const router = express.Router();

// User Model
const Location = require('../models/Locations');

//Get all users

router.get('/', (req, res) => {
    Location.find()
     .sort({locationName: 1})
     .then(loc => res.json(loc));
})

router.get('/:id', (req, res) => {
    res.send('Id find Working')
})

router.put('/:id', (req, res) => {
    res.send("update working")
})

router.delete('/:id', (req, res) => {
    Location.findById(req.params.id)
    .then(loc => loc.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false, msg: "Location was not Found"}))
})

router.post('/login', (req, res) => {
    res.send("login Route Working")
})

module.exports = router;