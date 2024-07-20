import Cart from "../models/cartdb.js"; // Asegúrate de que la ruta sea correcta

export const limitCartItems = async (res, req, next) => {
    const LIMIT = 10

    const itemCount = await Cart.countDocuments();
    console.log('Toltal items en tu carrito:' + itemCount)

    if (itemCount >= LIMIT) {
        return res.status(400).json({ message: 'Límite de elementos alcanzado' });
      }

    return next()

};