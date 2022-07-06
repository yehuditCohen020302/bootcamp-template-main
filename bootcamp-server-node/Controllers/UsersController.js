
const logger = require('../Log/logger');
// const module= require('module') ;

const userService =require ('../services/userService.service')

module.exports.getAllUsers=async (req,res, next)=>{
    try{
        // debugger
        const toGet = await userService.getAllUsersService();
        return res.status(200).json({toGet});
    }
    catch (error) {
        next(error)
    }
}

module.exports.getOneUser=async function(req,res, next){
    try{
        const id = req.params.id;
        const user= await userService.getOneUser(id);
      
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.updateUser=async function(req,res, next){
    try{
        debugger
        const id = req.params.id;
        const update= req.body;
        const user= await userService.updateUser(id, update);
      
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.deleteUser=async function(req,res, next){
    try{
        const id = req.params.id;
        const dlt=req.body;
        const user= await userService.deleteUser(id, dlt);
      
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.addNewUser=async function(req,res, next){
    try{
        const id = req.params.id;
        const user= await userService.addNewUser();
      
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}