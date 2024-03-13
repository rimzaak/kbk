'use server'

import { handleError } from "@/lib/utils/utils";
import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import Listing from "../database/models/listing.model";
import Transaction from "../database/models/transaction.models";

export async function createUser (user: CreateUserParams) {
    try {
        await connectToDatabase();

        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}

export async function getUserById(userId: string) {
    try {
        await connectToDatabase();

        const user = await User.findById(userId);

        if (!user) throw new Error('User Not Found')
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}

export async function updateUser (clerkId: string, user: UpdateUserParams) {
    try {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

        if (!updatedUser) throw new Error('User Update Failed')
        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        handleError(error);
    }
}

export async function deleteUser (clerkId: string) {
    try {
        await connectToDatabase();

        const userToDelete = await User.findOne({ clerkId });

        if (!userToDelete) {
            throw new Error('User Not Found')
        }

        //unlink relationships
        await Promise.all([
            Listing.updateMany(
                //update listings that refer to the user
            ),
            Transaction.updateMany(
                //update purchases that refer to the user
            )

        ])

        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath('/');

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)): null;
    } catch (error) {
        handleError(error);
    }
}