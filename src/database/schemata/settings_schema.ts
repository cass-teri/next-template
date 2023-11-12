import z from "zod"

export const settings_schema = z.object({
    name: z.string(),
    email: z.string().email()
})
