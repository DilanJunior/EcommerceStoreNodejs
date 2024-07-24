// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoutes from "./routes/Products.js";
import UserRoutes from "./routes/Users.js";
import cors from "cors";
import CartRoutes from "./routes/Cart.js";
import chalk from "chalk";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(__dirname);

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

app.listen(PORT, (err) => {
  if (err) console.log(chalk.red("Error al iniciar el servidor:", err));
  else console.log(chalk.green(`Server is running on port ${PORT}`));
});
