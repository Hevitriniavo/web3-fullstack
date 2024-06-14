import { Request, Response } from "express";
import { findAllUsers, findUserById, deleteUserById as deleteUserByIdDB, updateUser as updateUserDB, createUser } from "../repositories/user.repository";
import { User } from "../types/User";


export const getAllUsers = async (req: Request, res: Response) => {
    const { page = 1, perPage = 10, sortField = 'id', sortOrder = 'asc' } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const perPageNumber = parseInt(perPage as string, 10);
    const sortOrderTyped = sortOrder === 'asc' ? 'asc' : 'desc';
    try {
        const users = await findAllUsers(pageNumber, perPageNumber, sortField as string, sortOrderTyped);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const user = await findUserById(userId);
        if (!user) {
            return res.status(404).json({ error: `User with ID ${userId} not found.` });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

export const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const deletedUser = await deleteUserByIdDB(userId);
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userData: Partial<User> = req.body;
    try {
        const updatedUser = await updateUserDB(userId, userData);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(`Error in updateUser with ID ${userId}:`, error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
