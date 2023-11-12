import { defineConfig } from "vitest/config"
import { resolve } from "path"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"

export default defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    },
    plugins: [tsconfigPaths(), react()]
})
//resolve: {
//    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
//}
// plugins: [tsconfigPaths()]
// ,
