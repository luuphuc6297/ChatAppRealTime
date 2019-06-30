const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const CheckPassword = require('../../library/password')
const Common = require('../../library/common');
const send = require('../../config/send');
const User = mongoose.model('User');


exports.UserLogin = (req, res) => {

    let miss = Common.checkMissParams(res, req.body, ['email', 'password'])
    let id;
    let email;

    if(miss) {
        console.log("Miss param at Login");
        return;
    }

    User.findOne({email: req.body.email})
    .then(user => {
        if(!user) {
            return send.fail(res, "User dose not exist")
        }
        id = user._id;
        email = user.email
        let tokenPayload = {
            _id: user._id,
            email: email
        } // Truyền 2 thông số _id và email vào token
        return Promise.all([
            CheckPassword.comparePassword(req.body.password, user.password),
            Common.createToken(tokenPayload, "3 days"),
        ])
    })
    .then(result => {
        let isMatchPassword = result[0];
        let accessToken = result[1];
       
        if(!isMatchPassword) {
            return send.error(res, "Password is not match")
        }
        send.success(res,'Login Successful', {accessToken, id, email})
        
    })
    .catch(err => {
        send.fail(res, "Some thing wrong" || err);
        console.log('Login fail' + err);
    })
}
    
