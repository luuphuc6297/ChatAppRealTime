const bcrypt = require('bcrypt');

const send = require('../config/send');

exports.cryptPassword = (plaintextPassword, res) =>{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            if (err) throw err;
            plaintextPassword = hash;
        });
    });
}

exports.comparePassword = (plaintextPassword, hash, res) => {
    bcrypt.compare(plaintextPassword.toString(), hash, function (err, result) {
        if (err) {
            return send.fail(res, "Compare is fail");
        }
        if (result == true) {
            return send.success(res, "Login successful");
        } else {
            return send.fail(res, "Password is wrong");
        }
    })
}