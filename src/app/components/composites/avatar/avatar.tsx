"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"
import { Avatar as AvatarBase, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import React from "react"
import Link from "next/link"
import { User } from "@prisma/client"
import { Separator } from "@/app/components/ui/separator"
import { signOut } from "next-auth/react"
import { useTheme } from "next-themes"
import { BsGearFill } from "react-icons/bs"
import { FaPowerOff } from "react-icons/fa"
import { Switch } from "@/app/components/ui/switch"

export function Avatar(props: { className?: string; image_url?: string; alt: string; user: User }) {
    const { theme, setTheme } = useTheme()

    //    useEffect(() => {
    //        if (theme === "dark") {
    //            // @ts-ignore
    //        }
    //    }, [theme])

    function theme_toggle(state: boolean) {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <AvatarBase className="">
                    <AvatarImage src={props.image_url ?? ""} />
                    <AvatarFallback>{props.alt ?? "??"}</AvatarFallback>
                </AvatarBase>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <div className="p-2 text-foreground">{props?.user?.name}</div>
                <Separator orientation="horizontal" />
                <ul className="list-none">
                    <li className="hover:bg-secondary">
                        <Link
                            className="block box-border text-primary-foreground hover:text-gray-800 w-full h-full p-2"
                            href="/settings"
                        >
                            <BsGearFill className="inline-block mr-2" />
                            Settings
                        </Link>
                    </li>
                    <Separator orientation="horizontal" />

                    <li className="hover:bg-secondary hover:text-gray-800 ">
                        <div className="py-2 px-4 flex items-center">
                            <Switch
                                /* @ts-ignore */
                                id="theme-toggle"
                                onCheckedChange={theme_toggle}
                                className=""
                                checked={theme === "dark"}
                            ></Switch>
                            <span className="ml-4 block">Dark Mode</span>
                        </div>
                    </li>
                    <Separator orientation="horizontal" />
                    <li className="hover:bg-secondary">
                        <Link
                            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                            href="#"
                            className="block box-border hover:text-gray-800 w-full h-full p-2 text-primary-foreground"
                        >
                            <FaPowerOff className="inline-block mr-2" />
                            Log Off
                        </Link>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    )
}
