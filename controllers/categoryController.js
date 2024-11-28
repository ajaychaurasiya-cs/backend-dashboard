const Category = require('../models/Category');
const Product = require('../models/Product');

// Create a Category
const postCategories =  async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get All Categories
const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};
// Get a Category by ID (with Products)
const getCategoriesId = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const products = await Product.find({ categoryId: category._id });
    res.json({ category, products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Update a Category
const putCategoriesId = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Delete a Category (mark Products as uncategorized)
const deleteCategoriesId = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    await Product.updateMany({ categoryId: category._id }, { categoryId: null });
    res.json({ message: 'Category deleted and products marked as uncategorized' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    postCategories,
    getCategories,
    getCategoriesId,
    putCategoriesId,
    deleteCategoriesId
}