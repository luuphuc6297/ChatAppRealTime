const jwt = require('jsonwebtoken');
const config = require('../config/security');
const send = require('../config/send');


exports.findMissParams = (obj, checkProps) => {
    if(!Array.isArray(checkProps)) {
        checkProps = [checkProps];
    }
    obj = JSON.parse(JSON.stringify(obj));
    var missProps = [];
   
    for(var i = 0; i < checkProps.lenght; i ++) {
        if(!obj.hashOwnProperty(checkProps[i])) {
            missProps.push([checkProps[i]])
        }
        else if (!obj[checkProps[i]]) {
            missProps.push(checkProps[i]);
        }
    }
    return missProps;
};


exports.checkMissParams = (res, obj, checkProps) => {
    var missProps = this.findMissParams(obj, checkProps);
    if(missProps.length > 0) {
        send.fail(res, "Miss some params: " + missProps.toString());
        return true;
    }
    return false;
};

exports.createToken = (user, expire) => {
    return jwt.sign(user, config.secret , {
        expiresIn: expire
    })
}
