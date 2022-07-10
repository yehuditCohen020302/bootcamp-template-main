const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);


module.exports.login=async(email,password)=>{
debugger
    const _manager = await Array.from(data.managers).find(m => m.emailAddress === email && m.password===password);
    if(_manager==undefined)
        return "you dont have access to this page";
    return await _manager;

    // console.log('login user');
    
}
