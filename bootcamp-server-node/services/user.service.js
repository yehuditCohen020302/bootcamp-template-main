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

<<<<<<< HEAD
    module.exports.updateUser= async (_id,userToUpdate)=> {
        const updateUser=await userModel.updateOne({_id:ObjectId(_id)},userToUpdate);
        return `update user ${update.name}`        
=======
    module.exports.updateUser= async (id,update)=> {
         const updateUser=
        await userModel.updateOne({_id:ObjectId(id)},update);
        return `update user ${updateUser.firstName}`        
>>>>>>> 9fcfe4d6dc239e4b82f91d5d126d6157c7576b16
    },

    module.exports.deleteUser=async(id)=>{
        await userModel.deleteOne({_id:ObjectId(id)});
        return ` delete user  ${id} `
    },

    module.exports.addNewUser=async(add)=>{
      const insertedUser=await add.save();
      return insertedUser;
    }



