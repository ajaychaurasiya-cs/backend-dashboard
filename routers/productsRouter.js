const express = require("express");
const router = express.Router();

const {
  postProducts,
  getProducts,
  getProductsId,
  putProductsId,
  deleteProductsId,
} = require("../controllers/productController");

router.route("/products").get(getProducts).post(postProducts);
router
  .route("/products/:id")
  .get(getProductsId)
  .patch(putProductsId)
  .delete(deleteProductsId);

module.exports = router;