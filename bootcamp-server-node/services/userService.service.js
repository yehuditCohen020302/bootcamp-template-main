
const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);

module.exports=
{
    getAllUsersService: async ()=>{

        // return await JSON.stringify(data.users);
        return await data.users;

    },

    getOneUser: async(id) => {
        const user = await Array.from(data.users).find(user => user.id === id);
        return await user;
    },

    updateUser: async (id, update)=> {
        debugger
        let users = await Array.from(data.users)
        users = users.filter(user => user.id != id);
        users.push(update)
        // 'manager': manager,
        const json =  JSON.stringify({  'users':users })
        // await fs.writeFileSync('db.json', json);
        return json;
    },

    deleteUser:async(id, dlt)=>{
        let users = await Array.from(data.users)
        users = users.filter(user => user.id != id);
        // users.push(dlt)
       
        const json =  JSON.stringify({  'users':users })
        return json;
    },

    addNewUser:async()=>{
    console.log("addNewUser() called");
    }

}

