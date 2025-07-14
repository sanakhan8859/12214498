const express = require('express');
const  urlRouter  = require('./url.api');
const v1RouterUrl = express.Router();
v1RouterUrl.use('/url', urlRouter);

module.exports = v1RouterUrl;

