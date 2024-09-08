const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    itemName: { type: String, required: true },
    stock: { type: String, required: true },
    itemType: { type: String, required: true },
    price: { type: String, required: true },
    hospital_id: {type: String, required: true}
});

module.exports = mongoose.model('ItemSchema', InventorySchema);