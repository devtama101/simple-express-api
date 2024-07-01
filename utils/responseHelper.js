const successResponse = (res, data, message = "Request successful") => {
    return res.status(200).json({
        success: true,
        data,
        message
    });
};

const errorResponse = (res, statusCode, message, details = null) => {
    return res.status(statusCode).json({
        success: false,
        error: {
            message,
            details
        }
    });
};

module.exports = {
    successResponse,
    errorResponse
};
