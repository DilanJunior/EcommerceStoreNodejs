import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoutes from "./routes/Products.js";
import UserRoutes from "./routes/Users.js";
import CartRoutes from "./routes/Cart.js";
import CategoryRoutes from "./routes/Categorys.js";
import Category from "./models/Category.js";
import cors from "cors";
import chalk from "chalk";
import errorMiddleware from "./middleware/errorMiddleware.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(chalk.yellow(__dirname));

app.use(
  cors({
    origin: "*", // URL del frontend con Vite
    methods: "GET,POST,PUT,DELETE", // Métodos permitidos
    allowedHeaders: "Content-Type,Authorization", // Cabeceras permitidas
  })
);

app.use("/uploads/", express.static(path.join(__dirname, "uploads")));

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.blue("Database connected!")))
  .catch((err) => console.log(err));

// Rutas
app.get("/api/", (req, res) => {
  console.log(req);
  res.send("Welcome to the clothing store API!");
});

app.use("/api/products/", ProductRoutes); // Montar las rutas de productos
app.use("/api/users/", UserRoutes); // Montar las rutas de usuarios
app.use("/api/cart/", CartRoutes);
app.use("/api/categories/", CategoryRoutes);


app.use(notFoundHandler);

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
    await Category.deleteMany({}); // Borra todas las categorías actuales
    for (const item of category) {
      const newCategory = new Category({ name: item });
      await newCategory.save();
    }

    console.log(chalk.green("Categorías importadas correctamente"));
  } catch (err) {
    console.log(chalk.red("Error al importar categorías"));
  }
};

app.listen(PORT, (err) => {
  if (err) console.log(chalk.red("Error al iniciar el servidor:", err));
  else console.log(chalk.green(`Server is running on port ${PORT}`));
});
