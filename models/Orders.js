const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const Orders = new Schema({
    uid: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = Mongoose.model('orders', Orders);
