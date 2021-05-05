const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Firstname: String,
    Middlename: String,
    Lastname: String,
    Email : String,
    Password : String,
    Phone : Number,
    Birthdate: Date,
    Gender: String,
    CardNumber: Number,
    State: Boolean
});

module.exports = mongoose.model('Users',UserSchema);