import prisma from "../databases/db"

export const findAllCars = async () => {
    const allCars = await prisma.car.findMany();
    return allCars;
}