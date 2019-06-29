const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const ComparePassword = require('../../library/password');
const Common = require('../../library/common');
const send = require('../../config/send');
const User = mongoose.model('User');


exports.UserRegister = (req, res, next) => {
    // const { name, email, password, password2, phone } = req.body;


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
