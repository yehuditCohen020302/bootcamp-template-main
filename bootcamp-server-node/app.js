
const user=require('./routes/user.routes')
const meeting=require('./routes/meeting.routes');
const diary=require('./routes/diary.routes');
const access=require('./routes/access.routes');

const logger = require('./Log/logger')
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(express.static('Static'))
app.use(express.json());

app.use('/users', user);
app.use('/meeting',meeting);
app.use('/user/:id/diary',diary);
app.use('/login',access);

app.use((err,req,res,next) => {
  if(process.env.ENVIROMENT== "development")
  logger.error(err.message);
  res.status(500).send('oooooof Something broke! 😒')
})

app.use((req,res) => {
  
  res.status(404).sendFile(path.join( __dirname, './Static/html/404.html'));
})

// logger.error('error😳😵🥴');
app.listen(port, () => logger.info(`Hello server, we are running on ${port}`))




app.get('/', function(req, res) {
  res.send('Hello World!')
});

// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}!`)
// });
