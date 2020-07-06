const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')


//models

const Org = require('../models/Orgs');
const User = require('../models/Users');

router.get('/', (req, res) => res.send("Express is running with nodemon"));

router.post('/register',(req, res) => {
    //formdata
    const {firstName, lastName, username,
            email, password, companyName}  = req.body

        User.findOne({email})
            .then(userEmail => {
                if(userEmail)res.status(400).json({msg: "email already exits"}); 

                const newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    orgId: "noOrg",
                    role: "SuperUser"
                }); 
                
                    //salt & hash
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) =>{
                        if(err) throw err;
                        newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    jwt.sign(
                                        { id: user.id },
                                        config.get('jwtSecret'),
                                        {expiresIn: 3600},
                                        (err, token) => {
                                            if(err) throw err;
                                            res.json({
                                                token,
                                                user: {
                                                    orgId: user.orgId,
                                                    firstName: user.firstName,
                                                    role: user.role
                                                }
                                            })
                                        }
                                    )
                                })  
                     })
                })
            })







 
})

router.post('/login', (req, res) => {
    const { email, password}  = req.body

    User.findOne({email})
        .then(user => {
            if(!user)res.status(400).json({msg: "Not a valid Email"}); 
 
           bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg: "Invalid credientials"})

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        {expiresIn: 3600},
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    orgId: user.orgId,
                                    firstName: user.firstName,
                                    role: user.role
                                }
                            })
                        }
                    )
                }) 

        })
})

router.get('/authCheck', auth, (req, res) =>{
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
}
)

module.exports = router;