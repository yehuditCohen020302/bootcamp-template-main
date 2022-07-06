const fs=require('fs');
const dataFromFile=require('src')

module.exports.getAllTheMeetings=()=>{
   return 'getAllTheMeetings'
}

module.exports.getMeetingById=()=> {
   return 'getMeetingById'
}

module.exports.addMeeting=async function(req, res, next) {
    try{
        const insertedMeeting=await MeetingService.addMeeting(req.body);
        res.send(insertedMeeting);
    }
    catch(error){
        next(error)
    }
}

module.exports.updateMeeting=async function(req, res, next) {
    try{
        const updateMeeting=await MeetingService.updateMeeting(req.params.id,req.body);
    }
    catch(error){
        next(error)
    }
}

module.exports.removeMeeting=async function(req, res, next) {
    try{
        await MeetingService.removeMeeting(req.params.id);
        res.send(`delete meeting ${req.params.id}`)
    }
    catch(error){
        next(error)
    }
}