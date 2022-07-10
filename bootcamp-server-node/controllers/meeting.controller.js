const MeetingService = require('../services/meeting.service')

module.exports.getAllTheMeetings=async function(req, res, next) {
    try{
        const meetings=await MeetingService.getAllTheMeetings();
        res.send(meetings);
    }
    catch(error){
        next(error)
    }
}

module.exports.getMeetingById=async function(req, res, next) {
    try{
        const meeting=await MeetingService.getMeetingById(req.params.id);
        res.send(meeting);
    }
    catch(error){
        next(error)
    }
}

module.exports.addMeeting=async function(req, res, next) {
    try{
        let meeting=req.body;
        debugger
        const insertedMeeting=await MeetingService.addMeeting(meeting);
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