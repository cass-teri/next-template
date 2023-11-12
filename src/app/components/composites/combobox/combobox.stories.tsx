import type { Meta, StoryObj } from "@storybook/react"

import { ComboBox } from "@/app/components/composites/combobox/combobox"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Composites/ComboBox",
    component: ComboBox,
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
} satisfies Meta<typeof ComboBox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
    {
        value: "next.js",
        label: "Next.js"
    },
    {
        value: "sveltekit",
        label: "SvelteKit"
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js"
    },
    {
        value: "remix",
        label: "Remix"
    },
    {
        value: "astro",
        label: "Astro"
    }
]
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        items: frameworks
    },
    render: (args) => <ComboBox {...args} />
}

export const Placeholder: Story = {
    args: {
        items: frameworks,
        placeholder: "Pick Me!!!"
    },
    render: (args) => <ComboBox {...args} />
}
