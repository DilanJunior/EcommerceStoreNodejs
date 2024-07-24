import Product from "../models/Product.js";
import Cart from "../models/cartdb.js"; 

export const addController = async (req, res) => {
    try {
      const { productid, quantity } = req.body;
  
      const product = await Product.findById(productid);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      let cartItem = await Cart.findOne({ productId: product._id });
  
      if (cartItem) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        cartItem = new Cart({
          productId: product._id,
          quantity: quantity,
          price: product.price,
        });
        await cartItem.save();
      }
  
      await cartItem.calculateTotal();
  
      res.status(200).json({ message: "Product added to cart", cartItem });
    } catch (err) {
      console.log("No funciona la creacion del item");
      res.status(500).json({ message: err.message });
    }
  }

  export const deleteController = async (req, res) =>  {
    try {
      const { productid, quantity } = req.body;
  
      const cartItem = await Cart.findOne({ productId: productid });
      if (!cartItem)
        return res.status(404).json({ message: "Product not found in cart" });
  
      // Llama al método deleteProduct en el documento del carrito
      await cartItem.c(quantity);
  
      res.status(200).json({
        message: "Product quantity updated or removed from cart",
        cartItem,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }

  Cart.exports = {deleteController, }