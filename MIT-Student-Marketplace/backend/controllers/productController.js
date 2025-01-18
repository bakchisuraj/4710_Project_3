const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

exports.addProduct = async (req, res) => {
  const { name, category, price, description, stock } = req.body;
  try {
    const product = new Product({ name, category, price, description, stock });
    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(400).json({ message: 'Error adding product', error });
  }
};
