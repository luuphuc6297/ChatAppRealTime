const express = require('express');
const router = express.Router();

const UserController = require('../../controller/user/user');

router.post('/login', UserController.UserLogin);
router.post('/register', UserController.UserRegister);


module.exports = router;