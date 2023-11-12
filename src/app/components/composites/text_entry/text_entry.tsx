import { ChangeEvent } from "react"

export interface ITextEntryProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string | undefined
    autocomplete?: string | undefined
    autofocus?: boolean | undefined
    className?: string | undefined
    id?: string | undefined
    is_inline?: boolean | undefined
    is_required?: boolean | undefined
    label?: string
    name?: string | undefined
    ref?: any
    type?:
        | "text"
        | "password"
        | "email"
        | "number"
        | "tel"
        | "url"
        | "search"
        | "date"
        | "time"
        | "datetime-local"
        | "month"
        | "week"
        | "color"
        | undefined
    error?: string
    value?: string
}

export default function TextEntry(props: ITextEntryProps) {
    return (
        <label htmlFor={props.id} className={`${props.is_inline ? "" : "block"} font-medium text-primary-foreground`}>
            {props.label ? <span className={props.is_inline ? "" : "block"}>{props.label}</span> : ""}
            <input
                id={props.id}
                value={props.value}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                autoFocus={props.autofocus}
                autoComplete={props.autocomplete ? props.autocomplete : "off"}
                ref={props.ref}
                className={`border border-grey-900 rounded-md px-2 py-1 mt-2 text-lg ${props.className}`}
            />
            {props.is_required ? <span className="text-red-500 ml-2">* (required)</span> : ""}
            {props.error ? <span className="text-red-500 ml-2">{props.error}</span> : ""}
        </label>
    )
}
