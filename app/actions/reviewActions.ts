
"use server";

import clientPromise from "@/lib/mongodb";

export async function submitReviewForm(
  prevState: any,
  formData: FormData
) {
  try {
    const name = formData.get("name") as string;
    const rating = Number(formData.get("rating"));
    const review = formData.get("review") as string;
    const productId = formData.get("productId") as string;

    if (!name || !review || !productId) {
      return {
        success: false,
        message: "Please fill in all fields.",
      };
    }

    if (rating < 1 || rating > 5) {
      return {
        success: false,
        message: "Rating must be between 1 and 5.",
      };
    }

    const client = await clientPromise;
    const db = client.db("jewelry_store");

    await db.collection("reviews").insertOne({
      name,
      rating,
      review,
      productId,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "Thank you! Your review has been submitted.",
    };
  } catch (error) {
    console.error("Review submission error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
