
import mongoose, { mongo } from "mongoose";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const imageUrl = req.file ? req.file.filename : "";
  console.log(req.file)
  
  if (!name ||!price ||!description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if(!mongoose.Types.ObjectId.isValid(category)){
    return res.status(400).json({ message: "Invalid category ID" });
  }

  const product = new Product({
    name,
    price,
    description,
    imageUrl, 
    category,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({'name': req.params['name']});
    console.log(product)
    
    if (!product) return res.status(404).json({ message: "Product not found" });

    const context = {
        'product': product, error: 'Product not found'
    }
    res.json(product);
    
  } catch (err) {
    res.status(500).send(err.message);
  }
};
