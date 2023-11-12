import type { Meta, StoryObj } from "@storybook/react"

import Header from "@/app/components/bespoke/header/header"
import { RocketIcon } from "@radix-ui/react-icons"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Bespoke/Header",
    component: Header,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered"
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //backgroundColor: { control: "color" }
    }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
    args: {
        logo: <RocketIcon />,
        is_fixed: true
    },
    render: function Render(args) {
        return <Header logo={args.logo} is_fixed={args.is_fixed}></Header>
    }
}
