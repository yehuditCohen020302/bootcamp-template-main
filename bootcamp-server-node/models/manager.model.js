let mongoose=require('mongoose');
const Schema=mongoose.Schema;

const managerSchema=new mongoose.Schema({
    emailAddress:{
        type:String,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    password:String
 })
 
module.exports=mongoose.model('Manager',managerSchema);