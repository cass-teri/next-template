// This is a hack to allow the user_id to be passed through the session object
// Taken From : https://github.com/nextauthjs/next-auth/issues/671

import "next-auth"
import NextAuth, * as auth from "next-auth"
// import * as client from 'next-auth/client'
// import 'next-auth/client'

declare module "next-auth" {
    export * from "next-auth"
    export type InitOptions = auth.InitOptions
    export default NextAuth

    export interface Session {
        user: {
            name: string
            email: string
            image: string
            id: number
        }
    }
}

declare module "next-auth/client" {
    export * from "next-auth/client"

    export interface Session {
        user: {
            name: string
            email: string
            image: string
            id: number
        }
    }
}
