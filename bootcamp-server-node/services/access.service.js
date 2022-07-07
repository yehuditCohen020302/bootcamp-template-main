const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);


module.exports.login=async(emailUser)=>{
debugger
    const _user = await Array.from(data.users).find(u => u.emailAddress === emailUser.emailAddress);
    
    return await _user;

    // console.log('login user');
    
}
