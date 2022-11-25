const express = require('express');
const app = express();

app.use(express.json())

const router = require('./router/router');

app.use('/', router)

module.exports = app;