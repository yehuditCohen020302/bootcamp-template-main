
const user=require('./routes/user.routes')
const meeting=require('./routes/meeting.routes');
const account=require('./routes/account.routes');

const mongoosedb=require('./db/mongoosedb')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors=require('cors');
const logger = require('./Log/logger')
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('Static'));
app.use(express.json());


app.use('/users', user);
app.use('/meeting',meeting);
app.use('/account',account);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req,res) => {
  
  res.status(404).sendFile(path.join( __dirname, '404.html'));
})

app.use((err,req,res,next) => {
  if(process.env.ENVIROMENT== "development")
  logger.error(err.message);
  res.status(500).send('oooooof Something broke! 😒')
})


app.use((req,res) => {
  
  res.status(404).sendFile(path.join( __dirname, '404.html'));
})

// logger.error('error😳😵🥴');
app.listen(port, () => logger.info(`Hello server, we are running on ${port}`))


