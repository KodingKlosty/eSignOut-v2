const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// User Model
const User = require('../../models/Users');

//Get all users

router.get('/', (req, res) => {
    User.find()
     .sort({lastName: 1})
     .then(users => res.json(users));
})

router.get('/:id', (req, res) => {
    res.send('Id find Working')
})

router.post('/createUser', (req, res) => {
    //formdata
    const fd  = req.body
    const newUser = new User({
        firstName: fd.firstName,
        lastName: fd.lastName,
        email: fd.email,
        password: fd.password,
        orgId: orgId,
        role: fd.role
    });   
    
    newUser.save()
        .then(()=> res.json({success: true, msg: "User Created"}))
        .catch(err => res.json({success: false, msg: "User exists already", err: err}))
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false, msg: "User was not Found"}))
})


module.exports = router;