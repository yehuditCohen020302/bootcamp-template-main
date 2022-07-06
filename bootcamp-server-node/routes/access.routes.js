const express = require('express');
const controller=require('../controllers/access.controller')
const router=express.Router();

router.get('/',controller.loginManager);


module.exports = router;