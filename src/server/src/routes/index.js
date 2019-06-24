const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
     res.json({ message: "Hello home page" });
})

router.use('/user', require('../routes/user/user'));

module.exports = router;