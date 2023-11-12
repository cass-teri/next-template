import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
    const password_hash = await hash("password", 10)

    const user = await prisma.user.create({
        data: {
            email: "person@email.com",
            name: "Person Default",
            password_hash: password_hash
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
