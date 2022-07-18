// const fs= require("fs");
// const dataFromFile= fs.readFileSync('db.json');
// let data=JSON.parse(dataFromFile);
const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
const managerModel=require('../models/manager.model');

module.exports.login=async(email,password)=>{
    let manager=await managerModel.findOne({ email:email,password:password }).exec();
    return manager;
}
