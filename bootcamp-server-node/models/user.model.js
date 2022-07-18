let mongoose=require('mongoose');
const Schema=mongoose.Schema;
// const meetingSchema=require('./meeting.model');
// const diarySchema=require('./diary.model');

const userSchema=new mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    city:String,
    street:String,
    houseNumber:Number,
    phoneNumber:String,
    emailAddress:{
        type:String,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    height:Number,
    weightsHistory:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Meeting'
    }],
    diary:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    }
 })
 userSchema.set("toObject",{virtuals:true})
 userSchema.set("toJSON",{virtuals:true})
module.exports=mongoose.model('User',userSchema)