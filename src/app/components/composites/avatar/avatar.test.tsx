import React from "react"
import { describe, expect, it } from "vitest"
import { Avatar } from "./avatar"
import { render } from "@testing-library/react"
import { User } from "@prisma/client"

describe("Avatar", () => {
    const user: User = {
        name: "Test User",
        id: 1234,
        email: "test@user.com",
        created_at: new Date(),
        password_hash: "todo"
    }

    it("should render", () => {
        const avatar = <Avatar alt="96" user={user} />
        const render_result = render(avatar)
        expect(render_result.getByText("96")).toBeInTheDocument()
    })
})
