const express = require('express');
const controller=require('../controllers/access.controller')
const router=express.Router();

router.post('/',controller.loginManager);


module.exports = router;