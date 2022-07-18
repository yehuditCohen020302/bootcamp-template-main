let mongoose=require('mongoose');
const Schema=mongoose.Schema;

const meetingSchema=new mongoose.Schema({
    date:String,
    weight:Number,
 })
 
module.exports=mongoose.model('Meeting',meetingSchema)