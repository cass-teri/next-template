import { describe, expect, it } from "vitest"

import Header from "@/app/components/bespoke/header/header"
import { render } from "@testing-library/react"
import Link from "next/link"

describe("Header", () => {
    it("should render", () => {
        const header = (
            <Header logo="" is_fixed={true}>
                <Link href="#">Home</Link>
            </Header>
        )
        const render_result = render(header)
        expect(render_result.getByText("Home")).toBeInTheDocument()
    })
})
