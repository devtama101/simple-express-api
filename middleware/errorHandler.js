// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: {
            message: 'Internal Server Error',
            details: err.message,
        },
    });
};

module.exports = errorHandler;
