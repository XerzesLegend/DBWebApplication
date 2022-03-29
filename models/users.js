const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    major: String,
    date: Date
});

userSchema.statics.listAllUsers = function() {
    return this.find({});
};
userSchema.statics.listAgeGT = function(num) {
    return this.find({age : {$gt: num} })
};
userSchema.statics.listAgeLT = function(num) {
    return this.find({age : {$lt: num} })
};
userSchema.statics.listAgeET = function(num) {
    return this.find({age : {$eq: num} })
};

let userModel = mongoose.model('users', userSchema);

module.exports = userModel;