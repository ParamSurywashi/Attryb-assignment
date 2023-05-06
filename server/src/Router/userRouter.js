const express = require('express');
const router = express.Router();
const userController = require('../Controller/userConroller');


router.post('/adduser', userController.addUser);
router.get('/login', userController.loginUser);

exports.Router = router;