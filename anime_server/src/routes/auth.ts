import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl, getItem } from "../controllers/auth";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
router.get('/user', logMiddleware,getItem)

export { router };
