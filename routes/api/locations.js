const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// User Model
const Location = require('../../models/Locations');
const Org = require('../../models/Orgs')

//Get all users

router.get('/all', (req, res) => {
    Location.find()
     .sort({locationName: 1})
     .then(loc => res.json(loc));
})

 router.get('/:id', (req, res) => {
   Location.find({orgId: req.params.id})
    .sort({locationName: 1})
    .then(loc => res.json(loc))
    .catch(err => res.status(404).json({success: false, msg: "No Locations Found"}))
})

router.put('/:id', (req, res) => {
    res.send("update working")
})

router.delete('/:id', (req, res) => {
    Location.findById(req.params.id)
    .then(loc => loc.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false, msg: "Location was not Found"}))
})

router.post('/createLocation', auth, (req, res) => {
    //form data
    const fd = req.body
    console.log(fd)
    const newLoc = new Location({
        locationName: fd.locationName,
        teams: fd.teams,
        orgId: fd.orgId
    })
    
    newLoc.save()
        .then(loc => res.json(loc))
        .catch(err => res.json({success: false, msg: "Location exists already", err: err}))

})

module.exports = router;