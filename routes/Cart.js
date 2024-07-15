import Cart from "../models/cartdb.js"; // Asegúrate de que la ruta sea correcta
import Product from "../models/Product.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from API!");

  //El usuario puede añadir productos hasta cierto limite. Si no debe menssage Debe registrar.
  // El inicio debe mostrar categoria aletoriamente cada vez que se reacarga la pagima
  //Necesito una referencia de ese usuario para que este pueda agregar y eliminar, ver esa lista y obtner el total
  // Agregar y eliminar de manera asincronica sin verse en la necesidad de recagar la pagina hasta el final si hace falta
  //Para la autenticación, necesito que cada usuario tenga su propio token y que solo pueda hacer lo que le corresponde.
  //
});

router.post("/add", async function (req, res) {
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

    await cartItem.calculateTotal()

    res.status(200).json({ message: "Product added to cart", cartItem });
  } catch (err) {
    console.log("No funciona la creacion del item");
    res.status(500).json({ message: err.message });
  }
});

router.post("/delete", async function (req, res) {
  try {
    const { productid, quantity } = req.body;

    const cartItem = await Cart.findOne({ productId: productid });
    if (!cartItem) return res.status(404).json({ message: "Product not found in cart" });

    // Llama al método deleteProduct en el documento del carrito
    await cartItem.deleteProduct(quantity);

    res.status(200).json({
      message: "Product quantity updated or removed from cart",
      cartItem,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
