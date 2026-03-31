import express from "express";
import { register, login, signOut } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/signOut", signOut);

export default router;
