import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import ProductRoutes from "./views/Products.js";
import UserRoutes from "./views/Users.js";
import CartRoutes from "./views/Cart.js";
import CategoryRoutes from "./views/Categorys.js";
import Category from "./models/Category.js";
import cors from "cors";
import chalk from "chalk";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import sequelize from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(chalk.yellow(__dirname));

app.use(
  cors({
    origin: "http://localhost:5173", // URL del frontend con Vite
    methods: "GET,POST,PUT,DELETE", // Métodos permitidos
    allowedHeaders: "Content-Type,Authorization", // Cabeceras permitidas
    credentials: true,
  })
);

// Express Middleware

app.use(express.json());
app.use(cookieParser());
app.use("/uploads/", express.static(path.join(__dirname, "uploads")));

app.use("/api/products/", ProductRoutes); // Montar las rutas de productos
app.use("/api/users/", UserRoutes); // Montar las rutas de usuarios
app.use("/api/cart/", CartRoutes);
app.use("/api/categories/", CategoryRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log(chalk.blue("Conexión a MySQL establecida correctamente."));
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        chalk.green(`Servidor corriendo en http://localhost:${PORT}`)
      );
    });
  })
  .catch((err) => {
    console.error(chalk.red("No se pudo conectar a la base de datos:", err));
  });

//app.use(notFoundHandler);

const category = [
  "Anillos",
  "Pulseras",
  "Collares",
  "Pendientes",
  "Broches",
  "Charms",
  "Cadenas",
  "Dijes",
  "Relojes",
  "Brazaletes",
];

const sendCategories = async () => {
  try {
    await Category.destroy({ where: {} });

    const promises = category.map(async (item) => {
      return await Category.create({ name: item });
    });

    // Espera a que todas las promesas se resuelvan
    await Promise.all(promises);

    console.log(chalk.green("Categorías importadas correctamente"));
  } catch (err) {
    console.log(chalk.red("Error al importar categorías:", err));
  }
};

//sendCategories()


 