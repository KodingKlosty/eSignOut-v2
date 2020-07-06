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
app.use("/api", require('./routes/api/index'));
app.use("/api/users", require('./routes/api/users'));
app.use("/api/teams", require('./routes/api/teams'));
app.use("/api/orgs", require('./routes/api/orgs'));
app.use("/api/locations", require('./routes/api/locations'))

//Serve Static assets if in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is Running on port ${PORT}`));