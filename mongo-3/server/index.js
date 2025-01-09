const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const { Schema } = mongoose;





const productsSchema = new Schema({
    title: String,
    author: String,
})

const ProductsModel = mongoose.model("Products", productsSchema)

app.get('/products', async(req, res) => {
    try {
        const response = await ProductsModel.find({});
        res.json({data:response})
    } catch (error) {
        console.log(error);
        
    }
  })


mongoose.connect("mongodb+srv://solaehazmp202:123456S@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port} `)
      })
    console.log('Connected!')});


