import React from "react"
import { describe, expect, it } from "vitest"
import { ComboBox } from "@/app/components/composites/combobox/combobox"
import { render } from "@testing-library/react"

let test_items = [
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

describe("Combobox", () => {
    it("should render", () => {
        const combobox = <ComboBox onSelect={() => {}} items={test_items} />
        const render_result = render(combobox)
        expect(render_result.getByText("Select item...")).toBeInTheDocument()
    })
})
