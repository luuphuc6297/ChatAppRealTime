const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
//Create global
const app = express();


//Connect to DB
const Data = require('./config/mongdb');
mongoose.connect(Data.MongoURI, { useNewUrlParser: true }, () => {
    console.log("Connected DB");
});

//Middle ware
app.use(cors())
app.use(express.json());



require('./models/User');


//Import Routes
const routes = require('./routes');
//Route Middlewares
app.use('/api', routes);


app.listen(5000, () => {
    console.log("Server started on port 5000")
})
