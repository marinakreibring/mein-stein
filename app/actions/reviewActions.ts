"use server";

import { sql } from "@/app/lib/db";

export async function submitReviewForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const rating = Number(formData.get("rating"));
  const review = formData.get("review") as string;
  const productId = Number(formData.get("productId"));

  await sql`
    INSERT INTO reviews
    (name, rating, review, product_id)
    VALUES
    (${name}, ${rating}, ${review}, ${productId})
  `;

  return {
    success: true,
    message: "Thank you! Your review has been submitted.",
  };
}