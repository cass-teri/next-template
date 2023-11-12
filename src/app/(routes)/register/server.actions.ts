"use server"
import prisma from "@/database/db"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { registration_schema } from "@/database/schemata/registration_schema"

export async function create_user(prev: any, form_data: FormData) {
    let validated: any

    try {
        validated = registration_schema.safeParse(Object.fromEntries(form_data.entries()))
    } catch (e: any) {
        return {
            message: `Invalid form data: ${e.message}`
        }
    }

    const password_hash = await bcrypt.hash(validated.password as string, 10)

    const user = await prisma.user.create({
        data: {
            name: validated.name,
            email: validated.email,
            password_hash: password_hash
        }
    })

    if (user) {
        redirect("/settings")
    }

    return {
        message: "User not created"
    }
}
