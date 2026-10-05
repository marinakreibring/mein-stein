import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function createSession(userId: string) {
    const cookieStore = await cookies();

    cookieStore.set("session", userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });
}

export async function getSession() {
    const cookieStore = await cookies();

    return cookieStore.get("session")?.value || null;
}

export async function getCurrentUser() {
    const session = await getSession();

    if (!session) {
        return null;
    }

    try {
        const client = await clientPromise;
        const db = client.db("jewelry_store");

        const user = await db.collection("users").findOne({
            _id: new ObjectId(session),
        });

        if (!user) {
            return null;
        }

        return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
        };
    } catch (error) {
        console.error("Failed to get current user:", error);
        return null;
    }
}

export async function deleteSession() {
    const cookieStore = await cookies();

    cookieStore.delete("session");
}