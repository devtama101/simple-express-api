const itemService = require('../services/itemService');
const { successResponse, errorResponse } = require('../utils/responseHelper');

exports.getAllItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        return successResponse(res, items, "Items retrieved successfully");
    } catch (err) {
        return errorResponse(res, 500, "Failed to retrieve items", err.message);
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = await itemService.createItem(req.body);
        return successResponse(res, newItem, "Item created successfully");
    } catch (err) {
        return errorResponse(res, 400, "Failed to create item", err.message);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) {
            return errorResponse(res, 404, "Item not found");
        }
        return successResponse(res, item, "Item retrieved successfully");
    } catch (err) {
        return errorResponse(res, 500, "Failed to retrieve item", err.message);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        if (!item) {
            return errorResponse(res, 404, "Item not found");
        }
        return successResponse(res, item, "Item updated successfully");
    } catch (err) {
        return errorResponse(res, 400, "Failed to update item", err.message);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await itemService.deleteItem(req.params.id);
        if (!item) {
            return errorResponse(res, 404, "Item not found");
        }
        return successResponse(res, null, "Item deleted successfully");
    } catch (err) {
        return errorResponse(res, 500, "Failed to delete item", err.message);
    }
};
