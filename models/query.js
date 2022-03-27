const mongoose = require('mongoose');
let userModel = require("./users");

let querySchema = new mongoose.Schema({
    selection: String,
    condition: String,
    number: Number,
    date: Date
    
});

querySchema.statics.listAgeGT = function(num) {
    return userModel.find({age : {$gt: num} })
}
querySchema.statics.listAgeLT = function(num) {
    return userModel.find({age : {$lt: num} })
}
querySchema.statics.listAgeET = function(num) {
    return userModel.find({age : {$eq: num} })
}
let queryModel = mongoose.model('user', querySchema);

module.exports = queryModel;
