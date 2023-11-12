/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
        serverActions: true,
        serverComponentsExternalPackages: ["@prisma/client", "bcrypt"]
    }
}

const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
