const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    major: String
});

userSchema.statics.listAllUsers = function() {
    return this.find({});
};

let userModel = mongoose.model('user', userSchema);

module.exports = userModel;