import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("jewelry_store");

    const jewelry = await db
      .collection("jewelry")
      .find({})
      .limit(3)
      .toArray();

    return NextResponse.json(jewelry);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}