const express = require('express')
const { createShortUrlController } = require('../../controller/url.controller');
const { redirectController } = require('../../controller/user.controller');
const { urlStatsController } = require('../../controller/auth.controller');
const { logAuthMiddleware } = require('../../middleware/requestlogger.middleware')

const urlRouter = express.Router();

urlRouter.post('/shorturls', logAuthMiddleware, createShortUrlController);

urlRouter.get('/shorturls/:shortcode', logAuthMiddleware, urlStatsController);

urlRouter.get('/:shortcode', logAuthMiddleware, redirectController);

module.exports = urlRouter
