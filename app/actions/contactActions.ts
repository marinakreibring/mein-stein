"use server";

import clientPromise from "@/lib/mongodb";

export async function submitContactForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db(); 
    // Insert the contact form data into a collection 
    await db.collection("seller_applications").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "Thank you! Your message has been received.",
    };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}