// server
const express = require('express');
const http = require ('http');
const mongoose = require('mongoose');
let app = express();
const port = 3000;
 
// database
mongoose.connect('mongodb://localhost:27017/test');
let userModel = require("./models/users");
console.log(userModel.listAllUsers());


// setting server
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
 
app.get("/form", function(req, res){
    res.render("form");
})
app.get("/users", function(req, res){
    userModel.listAllUsers().then(function(users){
        res.render("users", {users: users})
    }).catch(function(error){
        res.error("Something went wrong! " + error);
    });
})
app.post("/user", function(req, res){
    console.log("User: " + JSON.stringify(req.body.user));
    let newUser = new userModel(req.body.car);

    newUser.save().then(function(){
        res.send("Added new user to database!");
    }).catch(function(error){
        res.err("Failed to add new user to database!");
    });
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

