import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(req: Request) {
    const session = await getServerSession(AuthOptions)
    return NextResponse.json({ authenticated: !!session })
}
