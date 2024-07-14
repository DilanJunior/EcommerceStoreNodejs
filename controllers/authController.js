import User from "../models/Userdb.js";
import pkg from "argon2";
const { argon2 } = pkg;

import { createUserToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { username, email, password, role, isactive } = req.body;

  try {
    const hash = await pkg.hash(password);

    const user = new User({
      username,
      email,
      password: hash.toString(),
      role,
      isactive,
    });

    const newUser = await user.save();

    const tokenUser = createUserToken({ username: username, email: email });
    res.cookie("token", tokenUser, { httpOnly: true });

    res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
      isactive: newUser.isactive,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await User.findOne({ email });
  if (!isUser) return res.status(401).json({ message: "User not found"});

  const valid = pkg.verify(isUser.password, password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const UserToken = createUserToken({ email: email, password: password });

  res.cookie("token", UserToken, { httpOnly: true });
  res.status(200).json({ message: "Login successful" });
};

export const logout = async (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
};



export const getUserProfile = async (req, res) => {
    res.json({ message: "is profile available"})

}
