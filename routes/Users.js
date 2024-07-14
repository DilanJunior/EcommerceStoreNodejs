import express, { response } from "express";
import User from "../models/Userdb.js";
import pkg from "argon2";
const { argon2 } = pkg;
import { register, login, logout , getUserProfile} from "../controllers/authController.js";
import {authRequire} from "../middleware/validatetoken.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authRequire , getUserProfile);

export default router;
