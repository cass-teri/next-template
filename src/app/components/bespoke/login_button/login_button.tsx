"use client"
import { signIn } from "next-auth/react"
import React from "react"

export function LoginButton(props: { className?: string }) {
    return (
        <button className={props.className} onClick={() => signIn()}>
            Login
        </button>
    )
}
