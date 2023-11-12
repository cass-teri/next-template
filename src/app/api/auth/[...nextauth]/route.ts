import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { User } from "@prisma/client"
import prisma from "@/database/db"

export const AuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "you@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if (!user) {
                    return null
                }
                const password_match = await compare(credentials.password, user.password_hash)
                if (!password_match) {
                    return null
                }
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                } as any
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u_user = user as unknown as User
                token.id = user.id
                return {
                    ...token,
                    id: u_user.id,
                    name: u_user.name
                }
            }
            return token
        }
    }
}

const handler = NextAuth(AuthOptions)
export { handler as GET, handler as POST }
