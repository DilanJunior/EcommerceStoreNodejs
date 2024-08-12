import { DataTypes } from 'sequelize';
import sequelize from '../db.js';  // Asegúrate de que tu archivo db.js esté configurado como se mencionó antes
import Product from './Product.js'; // Importa el modelo de Product

const CartItem = sequelize.define('CartItem', {
  productId: {
    type: DataTypes.INTEGER,  // Sequelize usará una clave foránea
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
}, {
  tableName: 'cart_items',  // Nombre de la tabla en la base de datos
  timestamps: true,         // Crea automáticamente createdAt y updatedAt
});

// Métodos personalizados

CartItem.prototype.addProduct = async function (productId, quantity, price) {
  const product = await Product.findByPk(productId);

  if (!product) {
    throw new Error("El producto no existe");
  }

  // Actualiza la cantidad si el producto ya está en el carrito
  if (this.productId === productId) {
    this.quantity += quantity;
    await this.save();
  } else {
    throw new Error("Producto no corresponde al ID");
  }
};

CartItem.prototype.deleteProduct = async function (quantity) {
  if (quantity) {
    this.quantity -= quantity;
    await this.calculateTotal();
    if (this.quantity < 1) {
      await this.destroy();
      console.log("Producto eliminado del carrito");
    } else {
      await this.save();
    }
  }
};

CartItem.prototype.calculateTotal = async function () {
  this.total = this.quantity * this.price;
  await this.save();
  console.log(this.total);
};

export default CartItem;
