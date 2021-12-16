const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 0,
    },
    mailid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;