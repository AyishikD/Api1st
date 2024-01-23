const Product= require("../model/product");

const getAllProducts = async(req,res) => {
    const{rating,sort, select}=req.query;
    const qo={};
    let d=Product.find(qo);
    if (rating){
        qo.rating=rating;
        console.log(qo);
    }
    if (sort){
        let sf=sort.split(",").join(" ");
        d=d.sort(sf);
    }
    if (select){
        let sef=select.split(",").join(" ");
        d=d.select(sef);
    }
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 5;
    let skip=(page-1)*limit;
    d=d.skip(skip).limit(limit);
    const data= await d;
    res.status(200).json({data});
};
//for displaying length use length functioin and assign it to any variable
//for particular name search like jos and jos10 use regex by mongodb

const getAllProductsTest = async(req,res) => {
    const data= await Product.find(req.query).select("company");
    res.status(200).json({data});
};

module.exports={getAllProducts, getAllProductsTest};
