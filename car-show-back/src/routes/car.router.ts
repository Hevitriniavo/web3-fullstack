import { Router } from "express";
import { getAllCars } from "../controllers/car.controller";

const router =  Router();
 router.get("/", getAllCars)
export default router;
