
const logger = require('../Log/logger');
const userService =require ('../services/user.service');
const userModel=require('../models/user.model')


module.exports.getAllUsers=async (req,res, next)=>{
    try{
        const toGet = await userService.getAllUsersService();
        return res.status(200).json(toGet);
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
        const id = req.params.id;
        const {firstName,lastName,city,street,houseNumber,phoneNumber,emailAddress,height,weightsHistory,diary}=req.body;
        const _user= {$set:{
            firstName,
            lastName,
            city,
            street,
            houseNumber,
            phoneNumber,
            emailAddress,
            height,
            weightsHistory,
            diary
        }}
        const user= await userService.updateUser(id, _user);
        res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.deleteUser=async function(req,res, next){
    try{
        const id = req.params.id;
        const user= await userService.deleteUser(id);
        res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.addNewUser=async function(req,res, next){
    try{
    const {firstName,lastName,city,street,houseNumber,phoneNumber,emailAddress,height,weightsHistory,diary}=req.body;
        const _user= new userModel(
            firstName,
            lastName,
            city,
            street,
            houseNumber,
            phoneNumber,
            emailAddress,
            height,
            weightsHistory,
            diary
        )
        // console.log(req.body, "req.body");
        // const id = req.params.id;
        // const add= req.body;
        const user= await userService.addNewUser(_user);
        await res.send(user);
    }
    catch (error) {
        next(error)
    }
}