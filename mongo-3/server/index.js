const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/ProductRoutes")
const app = express()
const port = 4000

require("dotenv").config();
app.use(express.json())



const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT;



app.use("/products", productRouter)
// const ProductsModel = mongoose.model("Products", productsSchema)

// get all data
// app.get('/products',)


  // get data by id

  // app.get('/products/:id',


  // delete data by id

  // app.delete('/products/:id',)


  // post data

  // app.post("/products" ,)

  // put data

  // app.put("/products/:id", )


mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${port} url is http://localhost:${port} `)
      })
    console.log('Connected!')});


