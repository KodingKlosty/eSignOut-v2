const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('config')
const path = require('path')

const app = express();
app.use(cors());
// MongoDB Config
const db = config.get('mongoURI')

// Connect to Mongo
mongoose.connect(db, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    })
    .then(() => console.log('Connection to MongoDb: ONLINE'))
    .catch(err => console.log("Connection to MongoDB: FAILED", err));

// BodyParser Middleware
app.use(express.json());

// Routes
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));
app.use("/teams", require('./routes/teams'));
app.use("/orgs", require('./routes/orgs'));
app.use("/locations", require('./routes/locations'))

//Serve Static assets if in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is Running on port ${PORT}`));