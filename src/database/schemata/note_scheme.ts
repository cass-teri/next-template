import z from "zod"

export const note_schema = z.object({
    title: z.string().min(1).max(128),
    content: z.string().min(1),
    user_id: z.coerce.number()
})
