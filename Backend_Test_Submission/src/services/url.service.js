const UrlModel = require('../model/urls.model');
const crypto = require('crypto');

const generateShortcode = () => {
    return crypto.randomBytes(3).toString('hex'); // 6 characters (e.g., 'a1b2c3')
};


const isShortcodeAvailable = async (shortcode) => {
    const existing = await UrlModel.findOne({ shortcode });
    return !existing;
};


const createShortUrl = async ({ url, shortcode, validity }) => {
    const code = shortcode || generateShortcode();


    if (!(await isShortcodeAvailable(code))) {
        throw new Error('Shortcode already in use. Try a different one.');
    }

    const createdAt = new Date();
    const expiry = new Date(createdAt.getTime() + (validity || 30) * 60000); // default 30 minutes

    const newUrl = await UrlModel.create({
        originalUrl: url,
        shortcode: code,
        createdAt,
        expiry,
        clickCount: 0,
        clickAnalytics: [],
    });

    return {
        shortLink: `https://localhost:3000/${code}`, // Replace with your domain if hosted
        expiry: newUrl.expiry.toISOString(),
    };
};

// Redirect: Get original URL by shortcode
const getUrlByShortcode = async (shortcode) => {
    const entry = await UrlModel.findOne({ shortcode });

    if (!entry) {
        throw new Error('Shortcode not found.');
    }

    // Check expiry
    if (new Date() > entry.expiry) {
        throw new Error('Short URL has expired.');
    }

    return entry;
};


// Update click stats
const recordClick = async (shortcode, data) => {
    const entry = await UrlModel.findOne({ shortcode });

    if (!entry) {
        throw new Error('Shortcode not found for click recording.');
    }

    entry.clickCount += 1;
    entry.clickAnalytics.push({
        timestamp: data.timestamp || new Date(),
        referrer: data.referrer || 'unknown',
        location: data.location || 'unknown',
    });

    await entry.save();
};


// Get stats for a shortcode
const getStatsByShortcode = async (shortcode) => {
    const entry = await UrlModel.findOne({ shortcode });

    if (!entry) {
        return null; // Let the controller handle the 404
    }

    return {
        url: entry.originalUrl,
        createdAt: entry.createdAt,
        expiry: entry.expiry,
        clicks: entry.clickAnalytics
    };
};

module.exports = {
    createShortUrl,
    getUrlByShortcode,
    recordClick,
    getStatsByShortcode,
};
