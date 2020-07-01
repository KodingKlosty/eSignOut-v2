const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Express is running with nodemon"));

module.exports = router;