
const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);

module.exports=
{
    getAllUsersService: async ()=>{
        debugger
        return await data.users;
    },

    getOneUser: async(id) => {
        const user = await Array.from(data.users).find(user => user.id === id);
        return await user;
    },

    updateUser: async(id)=> {
        console.log("updateUser() called");
    },

    deleteUser:async(id)=>{
    console.log("deleteUser() called");
    },

    addNewUser:async()=>{
    console.log("addNewUser() called");
    }

}

