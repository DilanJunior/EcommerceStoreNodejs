import { DataTypes } from 'sequelize';
import path from 'path';
import fs from 'fs';
import sequelize from '../db.js';
import Category from './Category.js'; // Importa el modelo de Category

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING, // Almacena la ruta de la imagen como una cadena
    allowNull: true,
  },
}, {
  tableName: 'products',  // Nombre de la tabla en la base de datos
  timestamps: true,       // Crea automáticamente createdAt y updatedAt
});

// Definir la relación entre Product y Category
Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
  }
});

// Método para eliminar la imagen antes de borrar el registro
Product.beforeDestroy(async (product, options) => {
  if (product.imageUrl) {
    const imagePath = path.join(__dirname, 'uploads', product.imageUrl);
    
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error al eliminar la imagen:', err);
        throw err; // Lanzar el error para que se maneje adecuadamente
      }
    });
  }
});

export default Product;
