let mongoose=require('mongoose');
const Schema=mongoose.Schema;

const diarySchema=new mongoose.Schema({
    days:[
        {
            date:String,
            meals:[
                [String]
            ]
        }
    ]
 })
 
module.exports=mongoose.model('Diary',diarySchema)