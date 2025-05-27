import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
	output: "hybrid",
	adapter: node({ mode: "standalone" }),
	site: SITE_URL,
	integrations: [sitemap()],
	trailingSlash: "never",
	build: {
		format: "directory",
	},
	redirects: {
		// Articles => Reviews
		"/article/gretel-and-the-dark-spoilers": "/review/book/gretel-and-the-dark",
		"/article/deadpool-kills-the-marvel-universe": "/review/book/deadpool-kills-the-marvel-universe",
		"/article/size-doesnt-matter-antman-spoilers": "/review/film/antman",
		"/article/agents-of-s-h-i-e-l-d-spoilers": "/review/tv/agents-of-shield",
		"/article/the-night-manager": "/review/tv/the-night-manager",
		// Articles => Notes
		"/article/thoughts-from-around-the-web": "/note/nine-design-tips-for-a-successful-company-logo",
		"/article/stickers-eclipses-and-lighthouses": "/note/google-lighthouse",
		"/article/spiders-dinosaurs-and-cvs-49": "/note/lifemap",
		// Notes => Articles
		"/notes/new-content-disabled-by-default-on-craft-cms": "/wrote/new-content-disabled-by-default-on-craft-cms",
		"/notes/code-institutes-5-day-coding-challenge-reviewed": "/wrote/code-institutes-5-day-coding-challenge-reviewed",
		"/notes/redactor-keyboard-shortcuts-for-craft-cms": "/wrote/redactor-keyboard-shortcuts-for-craft-cms",
		"/notes/gradient-borders-with-rounded-corners-on-input-fields": "/wrote/gradient-borders-with-rounded-corners-on-input-fields",
		// Changed slugs
		"/wrote/an-alpha-arrival": "/wrote/an-alpha-arrives",
		// Split/recombined articles
		"/wrote/month-in-media-july-2017-41-part-two": "/wrote/month-in-media-july-2017",
		"/wrote/month-in-media-january-2017-5-part-two": "/wrote/month-in-media-january-2017",
		// Redirect old content-specific URLs to new wrote/note structure
		"/article/[slug]": "/wrote/[slug]",
		"/journal/2020/[month]/[slug]": "/wrote/[slug]",
		// Redirect original WordPress URL structure
		"/2015/[month]/[day]/[slug]": "/wrote/[slug]",
		"/2016/[month]/[day]/[slug]": "/wrote/[slug]",
		"/2017/[month]/[day]/[slug]": "/wrote/[slug]",
		"/2018/[month]/[day]/[slug]": "/wrote/[slug]",
	}
});
