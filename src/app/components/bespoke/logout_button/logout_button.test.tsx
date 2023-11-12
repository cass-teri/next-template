import { assert, describe, test } from "vitest"
import { LogoutButton } from "@/app/components/bespoke/logout_button/logout_button"
import { render } from "@testing-library/react"

describe("Logout Button", () => {
    test("should render", () => {
        const logout_button = <LogoutButton />
        const render_result = render(logout_button)
        assert(render_result.getByText("Logout"))
    })
})
