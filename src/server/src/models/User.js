const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        require: true,
    },
    email:
    {
        type: String, trim: true, require: true,
        validate: {
            validator: validator.isEmail
        }
    },
    password:
    {
        type: String,
        require: true,
    },
    phone: 
    {
        type: String,
        index: {unique: true},
        validate: 
        {
            validator: validator.isMobilePhone
        }
    },
    statusID: 
    {
        type: Number,
        default: 1
    },
    socketID: 
    {
        type: String,
        trim: true
    },
    refreshToken: 
    {
        type: String,
        trim: true,
    },
    date: 
    {
        type: Date,
        default: Date.now
    },
    personInbox: [String]
});

module.exports = mongoose.model('User', userSchema);