const express = require('express');
const router = express.Router();
//models

const Org = require('../models/Orgs');
const User = require('../models/Users');

router.get('/', (req, res) => res.send("Express is running with nodemon"));

router.post('/register',(req, res) => {
    //formdata
    const fd  = req.body

    const newUser = new User({
        firstName: fd.firstName,
        lastName: fd.lastName,
        username: fd.username,
        email: fd.email,
        password: fd.password,
        companyName: fd.companyName,
        role: "SuperUser"
    });

    const newOrg = new Org({
        companyName: fd.companyName
    })

    newUser.save()
        .catch(err => res.json({success: false, msg: "User exists already", err: err}))
    newOrg.save()
        .then(()=> res.json({success: true, msg: "Company and User Created"}))
        .catch(err => res.json({success: false, msg: "Company exists already",err: err}))
})

router.post('/login', (req, res) => {

})

module.exports = router;