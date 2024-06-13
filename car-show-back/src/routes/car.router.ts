import { Router } from "express";
import { createCar, getAllCars, updateCar, getCarById, deleteCar } from "../controllers/car.controller";
import upload from "../files/upload";
import { verifyAccessToken } from "../utils/jwt";

const router = Router();

router.get("/",verifyAccessToken, getAllCars);

router.post("/", upload.array('images', 10), createCar);
router.put("/:carId",upload.array('images', 10),  updateCar);
router.get("/:carId", getCarById);
router.delete("/:carId", deleteCar);

export default router;
