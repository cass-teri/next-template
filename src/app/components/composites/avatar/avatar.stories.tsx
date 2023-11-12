import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "@/app/components/composites/avatar/avatar"

const meta = {
    title: "Composites/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {}
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const user = {
    name: "Test User",
    id: 1234,
    email: "test@user.com",
    created_at: new Date(),
    password_hash: "todo"
}

export const Primary: Story = {
    args: {
        //        image_url: "https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg",
        image_url: "./avatar.webp",
        alt: "CT",
        user
    },
    render: (args) => <Avatar {...args} />
}

export const Failover: Story = {
    args: {
        alt: "CT",
        user
    },
    render: (args) => <Avatar {...args} />
}
