import prisma from "../databases/db";
import { User } from "../types/User";
import { hashPassword } from "../utils/utils";

export const createUser = async (user: User) => {
    try {
        const {password, name, email} = user;
        const doesExists = await prisma.user.findUnique({
            where: {
                email
            }
        })
        
        if (doesExists) {
            throw Error("email already exists")
        }

        const hashedPassword = await hashPassword(password);
        return await prisma.user.create({
            data: {
                name,
                email: email,
                password : hashedPassword   
            },
        });
    } catch (error) {
        console.error("Error in createUser:", error);
        throw error;
    }
}



export const findUserById = async (userId: string) => {
    try {
        return await prisma.user.findUnique({
            where: { id: userId }
        });
    } catch (error) {
        console.error(`Error in User  has ID ${userId}:`, error);
        throw error;
    }
};




export const findUserByEmail = async (email: string) => {
    try {
        return await prisma.user.findUnique({
            where: { email: email }
        });
    } catch (error) {
        console.error(`Error in User has email: ${email}:`, error);
        throw error;
    }
};