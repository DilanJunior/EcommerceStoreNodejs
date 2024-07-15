// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoutes from "./routes/Products.js";
import UserRoutes from "./routes/Users.js";
import cors from "cors";
import CartRoutes from "./routes/Cart.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Para manejar cuerpos de solicitud JSON
app.use("/uploads", express.static("uploads")); // Servir imágenes estáticamente

app.use(
  cors({
    origin: "http://localhost:5173", // URL del frontend con Vite
    methods: "GET,POST,PUT,DELETE", // Métodos permitidos
    allowedHeaders: "Content-Type,Authorization", // Cabeceras permitidas
  })
);

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
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
  if (err) console.log("Error al iniciar el servidor:", err);
  else console.log(`Server is running on port ${PORT}`);
});
