const express = require('express');
const controller=require('../controllers/diary.controller')
const router=express.Router();

router.get('/',controller.getUsersDiary);
router.post('/',controller.addNewDaySummary);
router.post('/:id',controller.updateDaySummary);
router.delete('/:id',controller.removeDaySummary);

module.exports = router;