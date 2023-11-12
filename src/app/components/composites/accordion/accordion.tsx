"use client"
import {
    Accordion as AccordionBase,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/app/components/ui/accordion"
import React, { ReactElement } from "react"

interface IAccordionOption {
    title: string | ReactElement
    content: string | ReactElement
}

interface IAccordionProps {
    items: IAccordionOption[]
}

export function Accordion(props: IAccordionProps) {
    return (
        <AccordionBase type="single" collapsible className="w-full min-w-[300px]">
            {props.items.map((item, index) => {
                return (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                )
            })}
        </AccordionBase>
    )
}
