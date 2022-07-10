const DiaryService = require('../services/diary.service')

module.exports.getUsersDiary=async function(req, res, next) {
    try{
       const userId = req.params.id;
       const usersDiary=await DiaryService.getUsersDiary(userId);
       res.send(usersDiary);
    }
    catch(error){
        next(error)
    }
}

module.exports.addNewDaySummary=async function(req, res, next) {
    try{
        const userId=req.params.id;
        const daySummary=req.body;
        const insertedDaySummary=await userService.addNewDaySummary(userId,daySummary);
        res.send(insertedDaySummary);
    }
    catch(error){
        next(error)
    }
}

module.exports.updateDaySummary=async function(req, res, next) {
    try{
        const userId=req.params.id[0];
        const daySummaryId=req.params.id[1];
        const newDaySummary=req.body;
        const updatedDaySummary=await userService.updateDaySummary(userId,daySummaryId,newDaySummary);
        res.send(updatedDaySummary);
    }
    catch(error){
        next(error)
    }
}

module.exports.removeDaySummary=async function(req, res, next) {
    try{
        const userId=req.params.id[0];
        const daySummaryId=req.params.id[1];
        await DiaryService.removeDaySummary(userId, daySummaryId);
        res.send(`delete day summary ${daySummaryId} for user ${userId}`);
    }
    catch(error){
        next(error)
    }
}