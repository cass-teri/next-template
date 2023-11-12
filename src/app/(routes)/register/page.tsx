import { RegistrationForm } from "@/app/(routes)/register/RegistrationForm"
import { getServerSession } from "next-auth/next"
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function RegisterPage() {
    const user = (await getServerSession(AuthOptions))?.user

    if (user) {
        redirect("/")
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-32 w-full">
            <h1 className="text-6xl font-bold">Register</h1>
            <RegistrationForm />
        </div>
    )
}
