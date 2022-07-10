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
        const insertedDaySummary=await DiaryService.addNewDaySummary(userId,daySummary);
        res.send(insertedDaySummary);
    }
    catch(error){
        next(error)
    }
}

module.exports.updateDaySummary=async function(req, res, next) {
    try{
        const userId=req.params.idU;
        const dayId=req.params.idD;
        let daySummaryId=`${dayId[0]}${dayId[1]}/${dayId[2]}${dayId[3]}/${dayId[4]}${dayId[5]}${dayId[6]}${dayId[7]}`
        const newDaySummary=req.body;
        const updatedDaySummary=await DiaryService.updateDaySummary(userId,daySummaryId,newDaySummary);
        res.send(updatedDaySummary);
    }
    catch(error){
        next(error)
    }
}

module.exports.removeDaySummary=async function(req, res, next) {
    try{
        const userId=req.params.idU;
        const dayId=req.params.idD;
        let daySummaryId=`${dayId[0]}${dayId[1]}/${dayId[2]}${dayId[3]}/${dayId[4]}${dayId[5]}${dayId[6]}${dayId[7]}`
        await DiaryService.removeDaySummary(userId, daySummaryId);
        res.send(`delete day summary ${daySummaryId} for user ${userId}`);
    }
    catch(error){
        next(error)
    }
}