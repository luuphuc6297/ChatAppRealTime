const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const ComparePassword = require('../../library/password');
const Common = require('../../library/common');
const send = require('../../config/send');
const User = mongoose.model('User');


exports.UserRegister = (req, res, next) => {
    // const { name, email, password, password2, phone } = req.body;

    // if (!name || !email || !password || !password2 || !phone) {
    //     return send.fail(res, "Please enter all fields");
    // }
    // if (password !== password2) {
    //     return send.fail(res, "Passwords do not match");
    // }
    // if (password.length < 6) {
    //     return send.fail(res, "Password must be at least 6 characters");
    // }

    let missField = Common.checkMissParams(res, req.body, ['name', 'email', 'password', 'password2', 'phone'])
    if (missField) {
        console.log("Miss param at Create Field");
        return;
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return send.fail(res, "Email already exists");
        } else {
            ComparePassword.cryptPassword(req.body.password, res).then(PasswordHash => {
                req.body.password = PasswordHash;
                delete req.body.password2;
                User.create(req.body)
                    .then(() => {
                        return send.success(res, "Register successful");
                    })
                    .catch(err => {
                        return send.fail(res, err.message)
                    }
                );
            })
        }
    });
}
