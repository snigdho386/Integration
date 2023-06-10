const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const InventoryThresholdSchema = new Schema({
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
module.exports = Mongoose.model('threshold_inventories', InventoryThresholdSchema);
