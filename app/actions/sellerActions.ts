"use server";

import { sql } from "@/app/lib/db";

export async function submitSellerForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const craft = formData.get("craft") as string;
  const location = formData.get("location") as string;
  const bio = formData.get("bio") as string;

  await sql`
    INSERT INTO seller_applications
    (name, email, craft, location, bio)
    VALUES
    (${name}, ${email}, ${craft}, ${location}, ${bio})
  `;

  return {
    success: true,
    message: "Thank you! Your application has been received.",
  };
}