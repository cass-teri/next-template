import z from "zod"

export const tag_schema = z.object({
    id: z.coerce.number().optional(),
    name: z.string(),
    background_color: z.string(),
    text_color: z.string(),
    user_id: z.coerce.number()
})
