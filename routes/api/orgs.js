const express = require('express');
const router = express.Router();

// Org Model
const Org = require('../../models/Orgs');
const User = require('../../models/Users');
const { findByIdAndUpdate } = require('../../models/Orgs');

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

router.post('/createCompany', (req,res) => {
     const {companyName, userId} = req.body
     const newOrg = new Org({
         companyName
     })
            newOrg.save()
                .then(org => {                      
                    const orgIdUpdate = {
                    orgId: org._id
                    };  
                User.findByIdAndUpdate(userId, orgIdUpdate, function (err, user) {
                    if(err) return res.json({msg: "User was not updated with orgId", err: err});
                })
                .then(user => res.json(user))
            })


})

router.get('/:id', (req, res) => {
    Org.findById({_id: req.params.id})
        .then(org => res.json(org))
        .catch(err => res.status(404).json({success: false, msg: "No Org Found"}))

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