const express = require('express')
const { createShortUrlController } = require('../../controller/createShortUrlController');
const { redirectController } = require('../../controller/redirectController');
const { urlStatsController } = require('../../controller/urlStatsController');
const { logAuthMiddleware } = require('../../middleware/log.middleware')

const urlRouter = express.Router();

urlRouter.post('/shorturls', logAuthMiddleware, createShortUrlController);

urlRouter.get('/shorturls/:shortcode', logAuthMiddleware, urlStatsController);

urlRouter.get('/:shortcode', logAuthMiddleware, redirectController);

module.exports = urlRouter
