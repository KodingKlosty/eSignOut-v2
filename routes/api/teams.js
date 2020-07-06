const express = require('express');
const router = express.Router();

// Team Model
const Team = require('../../models/Teams');

//Get all teams

router.get('/', (req, res) => {
    Team.find()
     .sort({teamName: 1})
     .then(teams => res.json(teams));
})

router.get('/:id', (req, res) => {
    res.send('Id find Working')
})

router.put('/:id', (req, res) => {
    res.send("update working")
})

router.delete('/:id', (req, res) => {
    Team.findById(req.params.id)
    .then(team => team.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false, msg: "Team was not Found"}))
})





module.exports = router;