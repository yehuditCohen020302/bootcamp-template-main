const express= require('express');
const router= express.Router();
const userController= require('../controllers/users.controller');
const diaryController=require('../controllers/diary.controller');

router.get('/:id/diary',diaryController.getUsersDiary);
router.post('/:id/diary',diaryController.addNewDaySummary);
router.post('/:idU/diary/:idD',diaryController.updateDaySummary);
router.delete('/:idU/diary/:idD',diaryController.removeDaySummary);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/', userController.addNewUser);


module.exports= router;