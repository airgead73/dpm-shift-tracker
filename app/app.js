const express = require('express');
const path = require('path');
const app = express();

const { clientRouter } = require('./routers');

app.use(express.static(path.join(__dirname, 'client/public')));
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

app.use('/', clientRouter);

module.exports = app