

const logAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Authorization token missing or invalid. Please provide token in "Authorization: Bearer <token>" format.'
        });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Bearer token not provided.'
        });
    }

    next();
};

module.exports = {
    logAuthMiddleware
};
