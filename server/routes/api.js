const express = require('express');
const app = express();

app.use('/user',require('../app/user/userRoute'));

module.exports = app;