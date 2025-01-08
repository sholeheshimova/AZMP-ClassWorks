const express = require('express')
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");


app.use(express.json());
const products = [
    {
        id: 2,
        description: "Sweet and savory sauces relishes spreads and seasonings",
        name: "Condiments",
      },
      {
        id: 1,
        description: "Soft drinks coffees teas beers and ales",
        name: "Beverages",
      },
      {
        id: 3,
        description: "Desserts candies and sweet breads",
        name: "Confections",
      },
      {
        id: 4,
        description: "Cheeses",
        name: "Dairy Products",
      },
      {
        id: 5,
        description: "Breads crackers pasta and cereal",
        name: "Grains/Cereals",
      },
      {
        id: 6,
        description: "Prepared meats",
        name: "Meat/Poultry",
      },
      {
        id: 7,
        description: "Dried fruit and bean curd",
        name: "Produce",
      },
      {
        id: 8,
        description: "Seaweed and fish",
        name: "Seafood",
      },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
    if (products.length > 0 ) {
        res.send(products)
    }else{
        res.send({
            message: "data is empty"
        })
    }
  })

  // get data by id

  app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find((p) => p.id === +id)
    if (product !== undefined) {
        res.send({product})
    }else{
        res.send({
            message: "data is empty"
        })
    }
  })


  //delete data by id

  app.delete("/products/:id" , (req,res) => {
    const {id} = req.params;

    const idx = products.findIndex((p) => p.id === +id)

    if (idx === -1) {
        res.send({
            message: "no such product is deleted"
        })
    }else{
        const deleted = products.splice(idx , 1)
        res.send(products)
    }
  })
  

  // add new data
  app.post("/products" , (req, res) => {
    const {description,name}= req.body;
    const  newData ={
        id: uuidv4(),
        description,
        name,
    };
    products.push(newData)
    res.status(201).send({
      message: "successfully posted product!",
      newData,
    });
  })

  // put data by id

  app.put("/products/:id" , (req, res) => {
    const {id} = req.params;
    const {description,name}= req.body;
    const idx = products.findIndex((p) => p.id === +id)

    if (idx !== -1) {
      const updatedData ={
        id: +id,
        description,
        name,
      };
      products[idx] = updatedData;

      res.send(updatedData)
    }else{
      res.send({
        message: "error"
      })
    }
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})