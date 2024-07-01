const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const validateItem = require('../validators/itemValidator');
const validate = require('../middleware/validateMiddleware');

router.get('/', itemController.getAllItems);
router.post('/', validateItem, validate, itemController.createItem);
router.get('/:id', itemController.getItemById);
router.patch('/:id', validateItem, validate, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
