const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Category name is required"],
  },
  description: {
    type: String,
  },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
