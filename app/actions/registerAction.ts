"use server";

import clientPromise from "@/lib/mongodb";

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
    // Insert the register form data into a collection 
    await db.collection("users").insertOne({
      name,
      email,
      password,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "Congratulations! You have been registered.",
    };
  } catch (error) {
    console.error("Failed to submit register form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}