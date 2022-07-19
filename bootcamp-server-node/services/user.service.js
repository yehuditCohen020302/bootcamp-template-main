const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
const userModel=require('../models/user.model');

module.exports.getAllUsers= async ()=>{

        const user=await userModel.find();
        return user;
    },

    module.exports.getOneUser= async(id) => {
        const user = await userModel.findOne({id:id});
        return user;
    },

    module.exports.updateUser= async (_id,update)=> {
        const updateUser=await userModel.updateOne({_id:ObjectId(_id)},update);
        return `update user ${update.name}`        
    },

    module.exports.deleteUser=async(id)=>{
        await userModel.deleteOne({_id:ObjectId(id)});
        return ` delete user  ${id} `
    },

    module.exports.addNewUser=async(add)=>{
      const insertedUser=await add.save();
      return insertedUser;
    }



