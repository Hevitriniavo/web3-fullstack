import { Request, Response } from "express"
import { findAllCars } from "../repositories/car.repository"

export const getAllCars  = (req: Request, res: Response) => {
    res.json(findAllCars())
}