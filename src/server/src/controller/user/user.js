const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const ComparePassword = require('../../library/password');

const send = require('../../config/send');
const User = mongoose.model('User');


exports.UserLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return send.fail(res, "Please enter all fields")
    }
    if (email) {
        User.findOne({ email: email }).then(user => {
            if (!user) {
                return send.fail(res, "User dose not exist");
            }
            ComparePassword.comparePassword (password, user.password, res);
        });
    }
}

exports.UserRegister = (req, res, next) => {
    const { name, email, password, password2, phone } = req.body;

    if (!name || !email || !password || !password2 || !phone) {
        return send.fail(res, "Please enter all fields");
    }
    if (password !== password2) {
        return send.fail(res, "Passwords do not match");
    }
    if (password.length < 6) {
        return send.fail(res, "Password must be at least 6 characters");
    }
    User.findOne({ email: email }).then(user => {
        if (user) {
            return send.fail(res, "Email already exists");
        } else {
            var newUser = ({
                name: name,
                email: email,
                password: password,
                phone: phone
            })
        }
        ComparePassword.cryptPassword(newUser.password, res);
        User.create(newUser)
                .then(() => {
                    // res.redirect('/users/login');
                    return send.success(res, "Register successful");
                })
                .catch(err => {
                    return send.fail(res, err.message)
                }
            );
        }
    );
}
