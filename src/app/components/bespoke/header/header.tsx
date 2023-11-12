import React, { Children } from "react"

interface HeaderProps {
    children?: React.ReactNode
    is_fixed?: boolean
    logo: React.ReactNode
}

export default function Header(props: HeaderProps) {
    const children = Children.toArray(props.children)

    return (
        <div className={`${props.is_fixed ? "fixed" : ""} w-full items-center top-0 z-50`}>
            <header className="text-foreground h-12 items-center shadow-md bg-background">
                <div className="container flex items-center justify-between mx-auto ">
                    <div className="flex whitespace-nowrap">{props.logo}</div>
                    <ul className="flex items-center list-none text-xl font-bold">
                        {Children.map(children, (child) => {
                            return (
                                <li className="flex ml-6 border-t-transparent hover:border-t-primary-900 h-12 items-center">
                                    <span className="flex no-underline text-text-900 hover:text-primary-900 h-12 items-center">
                                        {child}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </header>
        </div>
    )
}
