require("dotenv").config();
const connectdb= require("./db/connect");
const Product= require("./model/product");
const ProductJson= require("./products.json");

const start= async() => {
    try {
        await connectdb(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start();