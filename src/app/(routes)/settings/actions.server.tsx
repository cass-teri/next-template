"use server"
import prisma from "@/database/db";
import z from "zod";
import {revalidatePath} from "next/cache";

export async function update_settings(prev:any,  form_data: FormData) {

    if (prev && prev.user == form_data) {
        console.log("No changes")
        return {
            message: "No changes"
        }
    }

    const schema = z.object({
        id: z.coerce.number(),
        name: z.string().min(1).max(255),
        email: z.string().email().min(1).max(255)
    })

    const validated = schema.parse(Object.fromEntries(form_data.entries()))

    await prisma.user.update({
        where: {
            id: validated.id
        },
        data: {
            name: validated.name,
            email: validated.email
        }
    })

    revalidatePath("/settings")
    return {
        message: "Ok"
    }
}
