"use client"
import { signOut } from "next-auth/react"

export function LogoutButton(props: { className?: string }) {
    return (
        <button
            className={`text-gray-700 no-underline border-4 border-transparent hover:border-b-pink-400 ${props.className}`}
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        >
            Logout
        </button>
    )
}
