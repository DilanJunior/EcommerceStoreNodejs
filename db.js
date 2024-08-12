import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "clothing_store",
  "root",
  "my$ecurePwrd!",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');
  })
  .catch((err) => {
    console.error('Error al sincronizar las tablas:', err);
  });

export default sequelize;