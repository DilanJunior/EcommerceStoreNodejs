import User from "../models/Userdb.js";
import pkg from "argon2";
import { createUserToken } from "../utils/jwt.js";
const { argon2 } = pkg;
import sequelize from "../db.js";


import multer from "multer";
const upload = multer();

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const hash = await pkg.hash(password);

    const user = await User.create({
      username,
      email,
      password: hash.toString(),
    });

    const tokenUser = createUserToken({ username: username, email: email });
    res.cookie("token", tokenUser, { httpOnly: true });

    res.status(201).json({
      email: email,
      username: username,
      tokenUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await User.findOne({ where: { email: email } });

  if (!isUser) return res.status(401).json({ message: "User not found" });

  const valid = pkg.verify(isUser.password, password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const UserToken = createUserToken({ email: email, role: isUser.role });

  res.cookie("UserToken", UserToken, {
    domain: "localhost",
    path: "/",
  });
  res.status(200).json({ token: UserToken, message: "Login successful" });
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

export const getUserProfile = async (req, res) => {
  /* console.log(req.payload);
  const { email, role } = req.payload;
  const user = await User.findOne({ where: { email: email } });
 */
  try{
    await sequelize.authenticate();
    const [resultados] = await sequelize.query("SHOW TABLES");
    console.log('Tablas en la base de datos:', resultados);
    res.status(200).json({resultados})
  }
  catch(error){
    console.log(error)
  }

  //res.json({ message: "is profile available", user });
};
