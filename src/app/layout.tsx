import "./globals.css"
import type { Metadata } from "next"
import React from "react"
import Header from "@/app/components/bespoke/header/header"
import Link from "next/link"
import Providers from "@/app/providers"
import { getServerSession } from "next-auth/next"
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { LoginButton } from "@/app/components/bespoke/login_button/login_button"
import { Avatar } from "@/app/components/composites/avatar/avatar"
import prisma from "@/database/db"
import { User } from "@prisma/client"

export const metadata: Metadata = {
    title: "::[next_template]::",
    description: "A Next.js template for quicker starts for prototyping."
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const user_contex = (await getServerSession(AuthOptions))?.user
    const is_fullscreen = false

    let user: User | null = null
    if (user_contex) {
        user = await prisma.user.findUnique({
            where: {
                id: user_contex.id
            }
        })
    }

    return (
        <html lang="en" className="m-0 h-full overflow-hidden scroll-smooth">
            <body className="m-0 h-full overflow-hidden">
                <Providers>
                    <Header
                        is_fixed={true}
                        logo={
                            <Link href="./" className="text-2xl no-underline text-secondary">
                                ::[next_template]::
                            </Link>
                        }
                    >
                        {user_contex && user ? (
                            <>
                                <Avatar image_url="./avatar.webp" alt="CT" className="ml-4 " user={user} />
                            </>
                        ) : (
                            <>
                                <Link
                                    className="text-primary-foreground no-underline border-4 border-transparent hover:border-b-primary mr-4"
                                    href="/register"
                                >
                                    Register
                                </Link>
                                <LoginButton className="text-primary-foreground no-underline border-4 border-transparent hover:border-b-primary" />
                            </>
                        )}
                    </Header>
                    <main
                        className={`flex min-h-screen flex-col items-center pt-12 mx-auto shadow-5xl ${
                            is_fullscreen ? "w-full" : "w-10/12"
                        }}`}
                    >
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
