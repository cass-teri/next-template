/* setupTest.ts */
import { afterEach, expect } from "vitest"
import "@testing-library/jest-dom/vitest"
import matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"

try {
    expect.extend(matchers)
} catch (e) {
    console.log(e)
}

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup()
})
