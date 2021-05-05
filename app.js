const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// import register route
const registerroute = require('./Routes/register');
app.use('/register', registerroute);

// import Login route
const loginroute = require('./Routes/Login');
app.use('/login', loginroute);





// start server
app.listen(3000, () => console.log('server is up and running'));
