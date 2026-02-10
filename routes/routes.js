import express from "express";
import { handlebfhl, handleHealth } from "../controllers/controller.js";
const router = express.Router();


router.get("/health",handleHealth);
router.post("/bfhl",handlebfhl);
export default router;