const express = require("express");
const router = express.Router();

const {
  postCategories,
  getCategories,
  getCategoriesId,
  putCategoriesId,
  deleteCategoriesId,
} = require("../controllers/categoryController");

router.route("/categories").get(getCategories).post(postCategories);
router
  .route("/categories/:id")
  .get(getCategoriesId)
  .patch(putCategoriesId)
  .delete(deleteCategoriesId);

module.exports = router;
