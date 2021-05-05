const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
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

module.exports = mongoose.model('Trips',TripSchema);