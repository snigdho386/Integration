const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const KitchenInventorySchema = new Schema({
    uid: {
        type: String,
        default: function() {
            return Mongoose.Types.ObjectId().toString();
        },
        required: true,
        unique: true
    },
    item: {
        type: String,
        required: true,
        unique: true
    },
    qty: {
        type: Number,
        required: true
    },
})
module.exports = Mongoose.model('kitchen_inventories', KitchenInventorySchema);
