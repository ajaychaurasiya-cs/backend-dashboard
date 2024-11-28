const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be positive"],
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, "Stock must be non-negative"],
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
