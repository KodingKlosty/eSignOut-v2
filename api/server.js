const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors());
// MongoDB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    })
    .then(() => console.log('Connection to MongoDb: ONLINE'))
    .catch(err => console.log("Connection to MongoDB: FAILED", err));

// BodyParser Middleware
app.use(bodyParser.json());

// Routes
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));
app.use("/teams", require('./routes/teams'));
app.use("/orgs", require('./routes/orgs'));
app.use("/locations", require('./routes/locations'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is Running on port ${PORT}`));