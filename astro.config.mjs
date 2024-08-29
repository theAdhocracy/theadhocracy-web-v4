import netlify from "@astrojs/netlify";
import node from "@astrojs/node";
import { defineConfig } from "astro/config";

let adapter = netlify();

// Use node adapter when running local builds (cannot run Netlify locally)
if (process.argv[3] === "--node" || process.argv[4] === "--node") {
	adapter = node({ mode: "standalone" });
}

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
	output: "server",
	adapter: adapter,
	base: "/journal",
});
