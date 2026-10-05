"use server";

import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function submitAccountForm(
    prevState: any,
    formData: FormData
) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Basic validation
    if (!email || !password) {
        return {
            success: false,
            message: "Please fill out all fields.",
        };
    }

    try {
        const client = await clientPromise;
        const db = client.db("jewelry_store");

        const user = await db.collection("users").findOne({
            email: email,
        });

        if (!user) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }

        const passwordMatches = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatches) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }

        await createSession(user._id.toString());
        
        return {
            success: true,
            message: "Welcome back! Redirecting you to the home page shortly...",            
        };
        
        
    } catch (error) {
        console.error("Failed to sign in:", error);

        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
