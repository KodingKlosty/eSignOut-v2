const express = require('express');
const router = express.Router();

// Org Model
const Org = require('../models/Orgs');

//Get all Orgs

router.get('/', (req, res) => {
    Org.find()
     .sort({companyName: 1})
     .then(orgs => res.json(orgs));
})

router.get('/companyName', (req, res) => {
    Org.findOne({companyName: req.body.companyName})
        .then(() => res.json({company: true}))
        .catch(() => res.json({company: false}))
})

router.get('/:id', (req, res) => {
    res.send('Org: Id find Working')
})

router.put('/:id ', (req, res) => {
    res.send('Org Update Works')
})
router.delete('/:id', (req, res) => {
    Org.findById(req.params.id)
    .then(org => org.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false, msg:"Org was not Found"}))
})




module.exports = router;