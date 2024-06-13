import { Router } from "express";
import { login, logout, refreshToken, register } from "../auth/auth";


const router = Router();

router.post("/", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.post("/logout",  logout);


export default router;
