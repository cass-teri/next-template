"use client"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/app/components/system/theme_provider/theme_provider"

type Props = {
    children?: React.ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <SessionProvider session={undefined}>
            <ThemeProvider defaultTheme="system" attribute="class">
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}
