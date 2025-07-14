const fs = require('fs');
const path = require('path');


const logFilePath = path.join(process.cwd(), 'logs.log');

const RequestLoggerMiddleware = async (req, res, next) => {
    try {
        const logEntry = `${new Date().toISOString()} ${req.method} ${req.url} ${req.ip}\n`;

        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
               y
            }
        });

        next();
    } catch (err) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    RequestLoggerMiddleware
};
