const mongoose = require('mongoose');
const { Schema } = mongoose;



const productsSchema = new Schema({
    title: String,
    author: String,
},{versionKey: false})


const ProductsModel = mongoose.model("Products", productsSchema)

module.exports = ProductsModel