const { body } = require('express-validator');

const validateItem = [
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
];

module.exports = validateItem;
