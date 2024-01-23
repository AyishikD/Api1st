const mongoose = require("mongoose");

const connectdb = (uri) => {
    console.log("DB connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    });
};

module.exports = connectdb;