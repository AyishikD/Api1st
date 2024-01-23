const mongoose = require("mongoose");
const prodschema = new mongoose.Schema({
    name: { type: String, 
        required: [true, "Example: John Doe"],
    },
    price: { type: Number, 
        required: [true, "Example: 4999"],
     },
    rating: { type: Number, 
        default: 4.9 },
    company : { type: String, 
        required: true },
});

module.exports = mongoose.model("Product",prodschema);