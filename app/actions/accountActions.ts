"use server";

import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

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

        // Find user by email
        const user = await db.collection("users").findOne({
            email: email,
        });

        // User doesn't exist
        if (!user) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }

        // Check password
        if (user.password !== password) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }
        
        return {
            success: true,
            message: "Welcome back! Redirecting you to the home page shortly...",
            user: {
                name: user.name,            
            },
            
        };
        
        
    } catch (error) {
        console.error("Failed to sign in:", error);

        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
