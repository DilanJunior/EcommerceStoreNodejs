import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',  // Valor por defecto
  },
  isactive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,  // Valor por defecto
  },
}, {
  tableName: 'users',  // Nombre de la tabla en la base de datos
  timestamps: true,    // Crea automáticamente createdAt y updatedAt
  hooks: {
    // Transformaciones para eliminar campos _id y __v no son necesarias en Sequelize
    afterFind: (result) => {
      if (Array.isArray(result)) {
        result.forEach(user => {
          user.id = user.id;
          delete user.dataValues._id;
          delete user.dataValues.__v;
        });
      } else {
        if (result) {
          result.id = result.id;
          delete result.dataValues._id;
          delete result.dataValues.__v;
        }
      }
    },
  },
});

export default User;
