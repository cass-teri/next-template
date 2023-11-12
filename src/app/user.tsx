"use client"

import { useSession } from "next-auth/react"

export const User = () => {
    const { data } = useSession()

    return <pre>{JSON.stringify(data)}</pre>
}
