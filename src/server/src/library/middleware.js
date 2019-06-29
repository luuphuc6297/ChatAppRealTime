const jwt = require('jsonwebtoken');
const send = require('../config/send')
const config = require('../config/security');

exports.expressMiddleware = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if(token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err)
                return send.error (res, "Failed to authenticate token.")
            req.tokenInfo = decoded;
            next();
        });
    } else{
        return send.fail(res, "No token provided.");
    }
}