import mongoose, { mongo } from "mongoose";
import Product from "../models/Product.js";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    default: 0},
});

// Methodos
cartItemSchema.methods.addProduct = async function (
  productId,
  quantity,
  price
) {
  const product = await Cart.findById(productId);

  if (!product) {
    throw new Error("El producto no existe");
  }

  // Actualiza la cantidad si el producto ya está en el carrito
  if (this.productId.equals(productId)) {
    this.quantity += quantity;
    await this.save();
  } else {
    throw new Error("Producto no corresponde al ID");
  }
};
cartItemSchema.methods.deleteProduct = async function (quantity) {

  if (quantity) {
    this.quantity -= quantity;
    await this.calculateTotal()
    if (this.quantity < 1) {
      await this.remove();
      console.log("Producto eliminado del carrito");
      
    } else {
      await this.save();
    }
  }
};

cartItemSchema.methods.calculateTotal = async function(){
  this.total = this.quantity * this.price;
  await this.save();
  console.log(this.total);
}



const Cart = mongoose.model('Cart', cartItemSchema);
export default Cart;
