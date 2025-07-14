const UrlModel = require('../model/urls.model')
const { Log } = require('../../Logging_Middleware/requestlogger.middleware')
const { getStatsByShortcode } = require('../service/url.service')

const urlStatsController = async (req, res) => {
    try {
      const { shortcode } = req.params;
  
      if (!shortcode) {
        await Log('backend', 'error', 'handler', 'Shortcode parameter is missing');
        return res.status(400).json({ message: 'Shortcode is required' });
      }
  
      const stats = await getStatsByShortcode(shortcode);
  
      if (!stats) {
        await Log('backend', 'warn', 'controller', `No URL found for shortcode: ${shortcode}`);
        return res.status(404).json({ message: 'Short URL not found' });
      }
  
      await Log('backend', 'info', 'controller', `Stats fetched for shortcode: ${shortcode}`);
  
      res.status(200).json({
        originalUrl: stats.url,
        createdAt: stats.createdAt,
        expiry: stats.expiry,
        totalClicks: stats.clicks.length,
        clickDetails: stats.clicks.map(click => ({
          timestamp: click.timestamp,
          referrer: click.referrer,
          location: click.location
        }))
      });
    } catch (error) {
      await Log('backend', 'fatal', 'controller', `Error in urlStatsController: ${error.message}`);
      res.status(500).json({
        message: 'Internal Server Error',
        error: error.message
      });
    }
  };

module.exports = {
    urlStatsController
}
