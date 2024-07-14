import mongoose, { mongo } from "mongoose";
import Product from "./Product";

const CartSchema = new mongoose.Schema({
  userid: {
    typeof: "string",
  },

  items: {
    products: {},
    quantity: Number,
  },
});

export const Carrito = mongoose.model("Carrito", CartSchema);
