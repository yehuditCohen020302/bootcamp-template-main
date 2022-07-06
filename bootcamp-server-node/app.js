const express = require('express');
const app = express();
const port = 3000;
const meeting=require('./routes/meeting.routes');
const diary=require('./routes/diary.routes');
const access=require('./routes/access.routes');
app.use('/meeting',meeting);
app.use('/user/:id/diary',diary);
app.use('/login',access);

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});