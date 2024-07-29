import mongoose, { mongo } from "mongoose";
import path from "path";
import fs from "fs";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  imageUrl: String, // Buffer para la imagen

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  
});

//Metohodos
ProductSchema.pre("remove", function (next) {
  if (this.imageUrl) {
    
    const UrlImage = path.join(__dirname, "uploads", this.imageUrl);

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error al eliminar la imagen:", err);
        // Pasar el error al manejador de errores
        next(err);
      } else {
        // Continuar con la eliminación del documento
        next();
      }
    });
  }
});

ProductSchema.methods.existImage = function () {
  if (!this.imageUrl) {
    return "Imagen no posee una imagen";
  } else {
    return "Imagen disponible";
  }
};

const Product = mongoose.model("Product", ProductSchema);
export default Product;
