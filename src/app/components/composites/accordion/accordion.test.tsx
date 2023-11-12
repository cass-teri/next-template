import { describe, expect, it } from "vitest"
import { Accordion } from "@/app/components/composites/accordion/accordion"
import { render } from "@testing-library/react"
import React from "react"

const items = [
    {
        title: "Title 1",
        content: "Content 1"
    },
    {
        title: "Title 2",
        content: "Content 2"
    }
]

describe("Accordion", () => {
    it("should render", () => {
        const accordion = <Accordion items={items}></Accordion>
        const render_result = render(accordion)
        expect(render_result.getByText("Title 1")).toBeInTheDocument()
    })
})
