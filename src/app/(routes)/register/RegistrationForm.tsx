"use client"
import TextEntry from "@/app/components/composites/text_entry/text_entry"
import { experimental_useFormState as useFormState } from "react-dom"
import React, { ChangeEvent } from "react"
import { create_user } from "@/app/(routes)/register/server.actions"
import { registration_schema } from "@/database/schemata/registration_schema"
import { Button } from "@/app/components/ui/button"

const initial_value = {
    email: "",
    name: "",
    password: ""
}

export function RegistrationForm() {
    const [form_state, form_action] = useFormState(create_user, initial_value)
    const [registry_form, set_registry_form] = React.useState(initial_value)
    const [errors, set_errors] = React.useState(initial_value)

    async function on_form_submit(event: any) {
        const validated = registration_schema.safeParse(registry_form)
        if (validated.success) {
            set_errors(initial_value)
            form_action(event)
        } else {
            const errs = Object.entries(validated.error.formErrors.fieldErrors)
            for (const [k, v] of errs) {
                set_errors({ ...errors, [k]: v })
            }
        }
    }

    async function on_change(event: ChangeEvent<HTMLInputElement>) {
        set_registry_form({ ...registry_form, [event.target.name]: event.target.value })
    }

    return (
        <form action={on_form_submit} className="w-full space-y-4 flex flex-col">
            <TextEntry
                onChange={on_change}
                className="w-full"
                label="Name"
                name="name"
                type="text"
                error={errors["name"]}
            />
            <TextEntry
                onChange={on_change}
                className="w-full"
                label="Email"
                name="email"
                type="email"
                error={errors["email"]}
            />
            <TextEntry
                onChange={on_change}
                className="w-full"
                label="Password"
                name="password"
                type="password"
                error={errors["password"]}
            />
            <p aria-live="polite" className="sr-only" role="status">
                {form_state?.message}
            </p>
            <div className="flex flex-row justify-center mt-4">
                <Button type="submit" className="w-64 bg-primary text-gray-900">
                    Submit
                </Button>
            </div>
        </form>
    )
}
