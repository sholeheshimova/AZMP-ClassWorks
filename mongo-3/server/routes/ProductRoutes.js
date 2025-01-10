const express = require('express')

const { getAllProducts,
    getProductsById,
    deleteProducts,
    postProducts,
    putProducts } = require("../controllers/ProductController")

const router = express.Router()

router.get("/", getAllProducts)
router.get("/:id", getProductsById)
router.delete("/:id", deleteProducts)
router.post("/", postProducts)
router.put("/:id", putProducts)

module.exports = router