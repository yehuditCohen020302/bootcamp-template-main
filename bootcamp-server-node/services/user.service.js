const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
const userModel=require('../models/user.model');
// const fs= require("fs");
// const dataFromFile= fs.readFileSync('db.json');
// let data=JSON.parse(dataFromFile);

module.exports.getAllUsersService= async ()=>{

        const user=await userModel.find();
        return user;
    },

    module.exports.getOneUser= async(id) => {
        const user = await userModel.findById(ObjectId(id));
        return user;
    },

    module.exports.updateUser= async (id, update)=> {
        const updateUser=await userModel.updateOne({_id:ObjectId(id)},update);
        return `update user ${update.name}`;

        // let users = await Array.from(data.users)
        // users = users.filter(user => user.id != id);
        // users.push(update)
        // // 'manager': manager,
        // const json =  JSON.stringify({  'users':users })
        // data.users = users;
        // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
        //     if (err) return console.log(err);
        //   })
        // // await fs.writeFileSync('db.json', json);
        // return `update user, now the all users: ${JSON.stringify(data.users)}`;
        
    },

    module.exports.deleteUser=async(id)=>{
        await userModel.deleteOne({_id:ObjectId(id)});
        return ` delete user  ${id} `


        // let users = await Array.from(data.users)
        // users = users.filter(user => user.id != id);
        // // users.push(dlt)
        // const json =  JSON.stringify({  'users':users })
        // data.users = users;
        // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
        //     if (err) return console.log(err);
        //   })
        // return `delete user, now the all users: ${json}`;
    
        
    },

    module.exports.addNewUser=async(add)=>{
      const insertedUser=await add.save();
      return insertedUser;

        // let users = await Array.from(data.users)
        // users.push(add)
        
        // const json =  JSON.stringify({  'users':users })
        // data.users = users;
        // await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
        //     if (err) return console.log(err);
        //   })
        // return `add user, now the all users: ${json}`;
    }



