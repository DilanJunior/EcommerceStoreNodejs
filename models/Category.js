import { DataTypes } from "sequelize";
import sequelize from '../db.js';

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // Similar a `required: false` en Mongoose
    },
  },
  {
    tableName: "categories", // Nombre de la tabla en la base de datos
    timestamps: true, // Crea automáticamente `createdAt` y `updatedAt`
  }
);

export default Category;
