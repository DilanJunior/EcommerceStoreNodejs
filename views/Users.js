import express, { response } from "express";
import User from "../models/Userdb.js";
import pkg from "argon2";
const { argon2 } = pkg;
import {
  register,
  login,
  logout,
  getUserProfile,
} from "../controllers/authController.js";
import { authMidlleware } from "../middleware/validatetoken.js";
import AuthorizeRole from "../middleware/accessControlMiddleware.js";
import multer from "multer";

const upload = multer();

const router = express.Router();

router.get("/", AuthorizeRole('admin', 'user'), async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);
router.post("/logout", logout);
router.get("/profile",  getUserProfile);

export default router;
