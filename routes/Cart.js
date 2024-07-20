import Cart from "../models/cartdb.js"; // Asegúrate de que la ruta sea correcta
import {limitCartItems} from "../middleware/cartLimit.js";
import express from "express";
import {addController, deleteController} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", async (req, res)  => {
  try {
    const CartItems = await Cart.find();
   
    res.json({ MyCart: CartItems });
  } catch (err) {
    console.log("No funciona la obtencion del carrito");
    res.status(500).json({ message: err.message });
  }
});



router.get('/GetCartItem', async function (req, res) {

  const countItems = await Cart.find();
   
    res.json({ MyCart: countItems });

})

router.post("/add", limitCartItems, addController);

router.post("/delete", deleteController);

export default router;
