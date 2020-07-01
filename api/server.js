const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();

// Routes
app.use("/", require('./routes/index'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is Running on port ${PORT}`));