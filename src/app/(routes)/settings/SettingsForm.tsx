"use client"
import { experimental_useFormState as useFormState } from "react-dom"
//import {experimental_useFormStatus as useFormStatus} from "react-dom";
import { update_settings } from "@/app/(routes)/settings/actions.server"
import TextEntry from "@/app/components/composites/text_entry/text_entry"
import { User } from "@prisma/client"
import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { settings_schema } from "@/database/schemata/settings_schema"
import { MessageBox } from "@/app/components/composites/message_box/message_box"

// currentTarget
export function SettingsForm(props: { user: User; className?: string }) {
    const initial_state = {
        message: ""
    }

    const [form_state, form_action] = useFormState(update_settings, initial_state)
    // const {pending} = useFormStatus()
    const [user, set_user] = useState(props.user)
    const [is_message_box_open, set_is_message_box_open] = useState(false)
    const [message_box_title, set_message_box_title] = useState("")
    const [message_box_description, set_message_box_description] = useState("")

    function show_message_box(title: string, description: string) {
        set_message_box_title(title)
        set_message_box_description(description)
        set_is_message_box_open(true)
    }

    async function on_change(event: any) {
        set_user({ ...user, [event.target.name]: event.target.value })
    }

    async function on_action(event: FormData) {
        // Client Side Validation
        const settings = Object.fromEntries(event.entries())
        const validated = settings_schema.safeParse(settings)

        if (!validated.success) {
            show_message_box("Error", validated.error.message)
            return
        }

        form_action(event)
        show_message_box("Success", "Settings updated")
    }

    async function validate(event: any) {
        const event_target = event.target
        return true
    }

    return (
        <div className={props.className}>
            <h1 className="text-6xl font-bold text-primary-foreground">Settings</h1>
            <p className="text-xl mt-4">This is the settings page</p>
            <form action={on_action} className="flex-col space-y-5 md:w-8/12 mx-auto">
                <input type="hidden" name="id" value={user.id} />
                <TextEntry label="Name" className="w-full" name="name" value={user.name ?? ""} onChange={on_change} />
                <TextEntry
                    label="Email"
                    className="w-full"
                    name="email"
                    value={user.email ?? ""}
                    onChange={on_change}
                />
                <p aria-live="polite" className="sr-only" role="status">
                    {form_state?.message}
                </p>
                <div className="justify-center flex flex-row">
                    <Button type="submit" className="w-64 text-gray-800 font-bold" variant="default">
                        Change
                    </Button>
                </div>
            </form>
            <MessageBox
                on_close={() => {
                    set_is_message_box_open(false)
                }}
                description={message_box_description}
                title={message_box_title}
                is_open={is_message_box_open}
            />
        </div>
    )
}
