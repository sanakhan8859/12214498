const UrlModel = require('../model/url.model')
const { Log } = require('../../logging-middleware/logger')
const {  getUrlByShortcode, recordClick } = require('../service/url.service')

const redirectController = async (req, res) => {
    try {
      const { shortcode } = req.params;
  
      const urlEntry = await getUrlByShortcode(shortcode);
      if (!urlEntry) {
        await Log('backend', 'error', 'controller', `Shortcode '${shortcode}' not found`);
        return res.status(404).json({ message: 'Shortcode not found' });
      }
  
      const currentTime = new Date();
      if (currentTime > urlEntry.expiry) {
        await Log('backend', 'warn', 'controller', `Shortcode '${shortcode}' has expired`);
        return res.status(410).json({ message: 'Shortcode has expired' }); // 410 Gone
      }
  
      const referrer = req.get('Referrer') || 'Direct';
      const ip = req.ip || req.connection.remoteAddress || 'Unknown';
      await recordClick(shortcode, { timestamp: currentTime, referrer, location: ip });
  
      await Log('backend', 'info', 'controller', `Redirected using shortcode '${shortcode}'`);
  
      res.redirect(urlEntry.originalUrl);
    } catch (error) {
      await Log('backend', 'fatal', 'controller', `Redirection failed: ${error.message}`);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
module.exports = {
    redirectController
}
