const ProductsModel = require("../models/ProductModels");

const getAllProducts = async (req, res) => {
  try {
    const response = await ProductsModel.find({});
    res.json({ data: response })
  } catch (error) {
    console.log(error);

  }
}

const getProductsById = async (req, res) => {

  const { id } = req.params
  try {
    const response = await ProductsModel.findById(id);
    res.json({ data: response })
  } catch (error) {
    console.log(error);

  }
}


const deleteProducts = async (req, res) => {

  const { id } = req.params
  try {
    const deletedProduct = await ProductsModel.findByIdAndDelete(id);
    res.json({
      data:
        deletedProduct
    })
  } catch (error) {
    console.log(error);
  }
}

const postProducts = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Bad Request! All fileds should be add!" });
  }
  try {
    const newProduct = ProductsModel({ ...req.body });
    await newProduct.save()
    res.json(newProduct)
  } catch (error) {
    res.json({
      message: "error"
    })
  }
}

const putProducts = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);


  try {
    const updatedProduct = await ProductsModel.findByIdAndUpdate(id,
      { ...req.body }, { new: true })


    res.json({
      message:"done", data: updatedProduct
    })

    console.log(updatedProduct);
    
  } catch (error) {
    res.json({
      message: "error"
    })
  }
}

module.exports = {
  getAllProducts,
  getProductsById,
  deleteProducts,
  postProducts,
  putProducts,
}