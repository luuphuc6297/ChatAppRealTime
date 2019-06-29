const express = require('express');
const router = express.Router();

const UserLogin = require('../../controller/user/login');
const UserRegister = require('../../controller/user/register');

router.post('/login', UserLogin.UserLogin);
router.post('/register', UserRegister.UserRegister);


module.exports = router;