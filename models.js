const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    id: {
        type: String,
        default: 0,
    },
    timestamp: {
        type: String,
        required: true,
    },
    order: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    vend: {
        type: String,
        required: true,
    },
    orderstatus: {
        type: String,
        required: true,
    }
});


const OrderData = mongoose.model("OrderData", OrderSchema);


module.exports = OrderData;