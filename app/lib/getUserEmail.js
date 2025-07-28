"use server"
import { auth } from "@/auth.js";

export async function getUserEmail() {
    const session = await auth();
    console.log(session?.user?.email);
    
    return session?.user?.email || null;
}
