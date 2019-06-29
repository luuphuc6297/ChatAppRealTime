const bcrypt = require('bcrypt');

const send = require('../config/send');

exports.cryptPassword = (plaintextPassword, res) => {
    return new Promise((resolve, reject) => {     
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return reject(err);
            bcrypt.hash(plaintextPassword, salt, (err, hash) => {
                if (err) return reject(err);
                return resolve(hash);
            });
        });
    })
}

exports.comparePassword = (plaintextPassword, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plaintextPassword.toString(), hash, function(err, result) {
            if(err)
                return reject(err);
            return resolve(result);
        })
    })
}