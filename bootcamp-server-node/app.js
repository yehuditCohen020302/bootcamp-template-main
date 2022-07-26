
const user=require('./routes/user.routes')
const meeting=require('./routes/meeting.routes');
const account=require('./routes/account.routes');
const { requiresAuth } = require('express-openid-connect');

const mongoosedb=require('./db/mongoosedb')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors=require('cors');
const logger = require('./Log/logger')
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'UGB5dTkjxqFx3ZyZdvuT2wQWKRTmODve',
  issuerBaseURL: 'https://weightwatchers.us.auth0.com'
};
const { requiresAuth } = require('express-openid-connect');


const app = express();

const clientUrl='http://127.0.0.1:5500/src/html/index.html'
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('Static'));
app.use(express.json());
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

app.get('/', (req, res) => { 
  if(req.oidc.isAuthenticated()) { 
    // res.cookie('cookieFromAuto0',req.cookies.fromAuto0)
    res.send(res.redirect(clientUrl));
   } else{
    res.send('loggedOut')
   }
 });

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

<<<<<<< HEAD
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use('/users', user);
app.use('/meeting',meeting);
=======
app.use('/users',requiresAuth(), user);
app.use('/meeting',requiresAuth(),meeting);
>>>>>>> a1fd1f67a56926f5cacb7aa98f50e28debdf5741
app.use('/account',account);

app.use('/api-docs', swaggerUi.serve,
 swaggerUi.setup(swaggerDocument));

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


