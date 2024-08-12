import { Router } from "express";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import multer from "multer";

const router = Router();

const storageCategories = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "categories/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Renombrar archivo para evitar colisiones
  },
});

const uploadCategoryImages = multer({ storage: storageCategories });

router.get("/", async (req, res) => {
  try {
    const Categories = await Category.findAll();

    const promises = Categories.map(async (category) => {
      const ProductCategoryList = await Product.findAll({ where : {
        CategoryId: category.id
      }
       
      });

      return {
        categoryName: category.name,
        products: ProductCategoryList,
      };
    });

    const categoryProducts = await Promise.all(promises);

    res.json({
      category: Categories,
      categoryProducts,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", uploadCategoryImages.single('categoryImage'), async (req, res) => {
  const { name } = req.body;
  const imageUrl = req.file ? req.file.filename : "";

  if (!name) {
    return res
      .status(400)
      .json({ message: "El nombre de la categoría es requerido" });
  }

  const category = new Category({
    name,
    imageUrl,
  });

  try {
    await category.save();
    res.status(201).json({ message: "Categoría creada con éxito", category });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la categoría", error });
  }
});

export default router;
