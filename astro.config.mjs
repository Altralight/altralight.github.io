import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://altralight.github.io",
    server: {
        host: true,
        port: 4321,
    },
});
