const path = require('path');
 
// server
const express = require('express');
let app = express();
const http = require ('http');
let server = http.createServer(app);
 
// database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

 
// setting up path and port
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

// database handling
let userModel = require("./models/users");
console.log(userModel.listAllUsers());





server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

