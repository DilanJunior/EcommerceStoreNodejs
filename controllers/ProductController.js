
import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description, category } = req.body;

  const imageUrl = req.file ? req.file.filename : "";
 

  const categoryItem = await Category.findOne({ where: { name: category } });

if (!category) {
  return res.status(400).json({ message: "Categoría no encontrada" });
}


  if (!name || !price || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

 
  try {
    
      const product = await Product.create({
        name,
        price,
        description,
        imageUrl,
        CategoryId: category,
      });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ name: req.params["name"] });
    console.log(product);

    if (!product) return res.status(404).json({ message: "Product not found" });

    const context = {
      product: product,
      error: "Product not found",
    };
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
