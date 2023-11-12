import { SettingsForm } from "@/app/(routes)/settings/SettingsForm"
import { getServerSession } from "next-auth/next"
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/database/db"
import { redirect } from "next/navigation"

export default async function SettingsPage() {
    const session_user = (await getServerSession(AuthOptions))?.user

    const user = await prisma.user.findUnique({
        where: {
            id: session_user?.id
        }
    })

    if (!user) {
        redirect("/login")
    }

    return <SettingsForm user={user} className="w-full flex flex-col justify-center" />
}
