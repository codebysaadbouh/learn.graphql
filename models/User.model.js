const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            min: 6, 
            max: 255
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024
        },
    }
)

const User = mongoose.model('user', UserSchema);
module.exports = User