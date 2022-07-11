
const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);

module.exports.getAllUsersService= async ()=>{

        // return await JSON.stringify(data.users);
        return await data.users;

    },

    module.exports.getOneUser= async(id) => {
        const user = await Array.from(data.users).find(user => user.id === id);
        return await user;
    },

    module.exports.updateUser= async (id, update)=> {
        //  debugger
        let users = await Array.from(data.users)
        users = users.filter(user => user.id != id);
        users.push(update)
        // 'manager': manager,
        const json =  JSON.stringify({  'users':users })
        data.users = users;
        await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
            if (err) return console.log(err);
          })
        // await fs.writeFileSync('db.json', json);
        return `update user, now the all users: ${JSON.stringify(data.users)}`;
        
    },

    module.exports.deleteUser=async(id, dlt)=>{
        let users = await Array.from(data.users)
        users = users.filter(user => user.id != id);
        // users.push(dlt)
        const json =  JSON.stringify({  'users':users })
        data.users = users;
        await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
            if (err) return console.log(err);
          })
        return `delete user, now the all users: ${json}`;
    
        
    },

    module.exports.addNewUser=async(id, add)=>{
        let users = await Array.from(data.users)
        users.push(add)
        
        const json =  JSON.stringify({  'users':users })
        data.users = users;
        await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
            if (err) return console.log(err);
          })
        return `add user, now the all users: ${json}`;
    }



