// server
const express = require('express');
const mongoose = require('mongoose');
let app = express();
const port = 3000;
 
// database
mongoose.connect('mongodb://localhost:27017/test');
let userModel = require("./models/users");
let queryModel = require("./models/query");

// setting server
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
 
app.get("/upload", function(req, res){
    res.render("upload");
});
app.get("/list", function(req, res){
    userModel.listAllUsers().then(function(users){
        res.render("list", {users: users});
    }).catch(function(error){
        res.error("Something went wrong! " + error);
    });
    
});
app.post("/allUsers", function(req, res){
    console.log("User: " + JSON.stringify(req.body.user));
    let newUser = new userModel(req.body.user);

    newUser.save().then(function(){
        console.log("Added new user to database!");
    }).catch(function(error){
        console.log("Failed to add new user to database!");
    });
    res.render("upload");
});
app.get("/query", function(req, res){
    res.render("query");
});

app.post("/queryResult", function(req, res){
    let filter = req.body.query;
    if(filter.selection == "age"){
        if(filter.condition == 'gt'){
            queryModel.listAgeGT(filter.number).then(function(users){
                res.render("queryResult", {users: users});
            })
        }
        else if(filter.condition == 'lt'){
            queryModel.listAgeLT(filter.number).then(function(users){
                res.render("queryResult", {users: users});
            })
        }
        else if(filter.condition == 'et'){
            queryModel.listAgeET(filter.number).then(function(users){
                res.render("queryResult", {users: users});
            })
        }
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

