import type { Meta, StoryObj } from "@storybook/react"

import { Notification } from "@/app/components/composites/notification/notification"

const meta = {
    title: "Composites/Notification",
    component: Notification,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {}
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: "title",
        description: "description",
        variant: "default"
    },
    render: function Render(args) {
        return <Notification variant={args.variant} title={args.title} description={args.description} />
    }
}

export const Destructive: Story = {
    args: {
        title: "title",
        description: "description",
        variant: "destructive"
    },
    render: function Render(args) {
        return <Notification variant={args.variant} title={args.title} description={args.description} />
    }
}
