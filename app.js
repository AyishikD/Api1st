require("dotenv").config();
const express = require('express');
const app = express();
const connectdb = require("./db/connect");

const PORT=process.env.PORT || 5000;

const prod_routes=require("./routes/product");
const product = require("./model/product");

app.get('/', function (req, res) {
   res.send('Hi this is live!');
})

app.use("/api/products", prod_routes);

const start = async () => {
    try {
        await connectdb(process.env.MONGODB_URL);
        app.listen(PORT,()=> {
            console.log(`${PORT} Connected Successfully`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();