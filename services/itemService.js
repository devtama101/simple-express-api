const Item = require('../models/item');

const getAllItems = async () => {
    return await Item.find();
};

const createItem = async (itemData) => {
    const newItem = new Item(itemData);
    await newItem.save();
    return newItem;
};

const getItemById = async (id) => {
    return await Item.findById(id);
};

const updateItem = async (id, itemData) => {
    return await Item.findByIdAndUpdate(id, itemData, { new: true, runValidators: true });
};

const deleteItem = async (id) => {
    return await Item.findByIdAndDelete(id);
};

module.exports = {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem,
};
