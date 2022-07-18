let mongoose = require('mongoose');
const connectionString = process.env.DB_CONNECTION;

class Database{
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(connectionString)
        .then(()=>{
            console.log('success')
        })
        .catch(err=>{
            console.error('error')
        })
    }


}
module.exports=new Database()