const express= require('express');
const router= express.Router();
const userController= require('../controllers/users.controller')

// const diary=require('./diary.routes')
// const app = express();
// app.use('/:id/diary',diary);

//get All Users
router.get('/', userController.getAllUsers);

//get Users By Search


//get One User
router.get('/:id', userController.getOneUser);

//update User
router.put('/:id', userController.updateUser);

//delete User
router.delete('/:id', userController.deleteUser);

//add New User
router.post('/', userController.addNewUser);


module.exports= router;