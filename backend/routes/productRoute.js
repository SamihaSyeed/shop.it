const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router=express.Router();

router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/update/:id").put(updateProduct)
router.route("/product/delete/:id").delete(deleteProduct)

module.exports = router