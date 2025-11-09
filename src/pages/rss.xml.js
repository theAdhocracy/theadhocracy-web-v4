import rss from "@astrojs/rss";
import { fetchCraftAPI } from "@/utilities/craft";

export async function GET(context) {
	const data = await fetchCraftAPI("everything.json");

	return rss({
		title: "theAdhocracy | RSS",
		description: "Ad hoc thoughts from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: data.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date.datetime,
			description: post.snippet,
			link: `/${post.type === "articles" ? "wrote" : "note"}/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
