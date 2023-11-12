"use client"

import React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/app/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/app/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"

export interface IComboboxItem {
    label: string
    value: string
}

export interface IComboBoxProps {
    items: IComboboxItem[]
    placeholder?: string

    onSelect: (currentValue: string) => void
}

export function ComboBox(props: IComboBoxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const placeholder = props.placeholder || "Select item..."

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
                    {value ? props.items.find((item) => item.value === value)?.label : placeholder}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder={placeholder} className="h-9" />
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                        {props.items.map((item) => (
                            <CommandItem
                                key={item.value}
                                value={item.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                    props.onSelect?.(currentValue)
                                }}
                            >
                                {item.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === item.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
