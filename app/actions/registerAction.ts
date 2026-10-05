"use server";

import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function submitRegisterForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Basic validation
  if (!name || !email || !password) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }
  
   try {
        const client = await clientPromise;
        const db = client.db("jewelry_store");

        const existingUser = await db.collection("users").findOne({
            email: email,
        });

        if (existingUser) {
            return {
                success: false,
                message: "An account with this email already exists.",
            };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        await createSession(result.insertedId.toString());

    return {
      success: true,
      message: "Congratulations! You have been registered. You will be redirected to the home page shortly.",
    };
  } catch (error) {
    console.error("Failed to submit register form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}