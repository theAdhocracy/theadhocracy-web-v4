import node from "@astrojs/node";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
	output: "hybrid",
	adapter: node({ mode: "standalone" }),
	site: "https://v4.theadhocracy.co.uk",
	integrations: [sitemap()],
	trailingSlash: "never",
	build: {
		format: "directory",
	},
});
