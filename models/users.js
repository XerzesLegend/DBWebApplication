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
let userModel = mongoose.model('users', userSchema);

module.exports = userModel;