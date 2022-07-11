const fs= require("fs");
const dataFromFile= fs.readFileSync('db.json');
let data=JSON.parse(dataFromFile);


module.exports.getAllTheMeetings=async()=>{

   console.log( 'getAllTheMeetings');

   // debugger
   let users = await Array.from(data.users);
   let meetings=[];
   users.forEach(user => {meetings.push(user.weightsHistory)})

   return await meetings;
   
}

module.exports.getMeetingById= async(id)=> {
   console.log( 'getMeetingById');
   const user = await Array.from(data.users).find(user => user.id === id);
   let meeting;
   meeting=user.weightsHistory;

   return await meeting;

}

module.exports.addMeeting=async (meeting)=> {
   console.log( 'addMeeting');
   // debugger
   let id= meeting.id;
   let weightsHistory= meeting.weightsHistory;
   const user = await Array.from(data.users).find(user => user.id === id);
   user.weightsHistory.push(weightsHistory);
   let users=data.filter(user => user.id!=id);
   users.push(user);
   data.users = users;
   await fs.writeFile('db.json', JSON.stringify(data), (err)=> {
      if (err) return console.log(err);
    })
   
   // ((data.users).find(user => user.id === id))=json;

   return `The new meeting add: ${JSON.parse(JSON.stringify(user))}`;

}

module.exports.updateMeeting=async (id,updateMeeting)=> {
   // debugger
   let user=await Array.from(data.users).find(user => user.id === id);
   user.weightsHistory=updateMeeting.weightsHistory;
   let users=data.filter(user => user.id!=id);
   users.push(user);
   data.users = users;
   const json =  JSON.stringify({  'user':user })
   // data.users = user;

   return `update , now the all user: ${JSON.stringify(user)}`;
}

// module.exports.updateUser= async (id, update)=> {
//    debugger
//   let users = await Array.from(data.users)
//   users = users.filter(user => user.id != id);
//   users.push(update)
//   // 'manager': manager,
//   const json =  JSON.stringify({  'users':users })
//   data.users = users;
//   // await fs.writeFileSync('db.json', json);
//   return `update user, now the all users: ${JSON.stringify(data.users)}`;
  
// },




// module.exports.removeMeeting=async function(req, res, next) {
//     try{
//         await MeetingService.removeMeeting(req.params.id);
//         res.send(`delete meeting ${req.params.id}`)
//     }
//     catch(error){
//         next(error)
//     }
// }