import rss from "@astrojs/rss";
import { fetchCraftAPI } from "@/utilities/craft";

export async function GET(context) {
	const articles = await fetchCraftAPI("articles.json");

	return rss({
		title: "theAdhocracy | Articles",
		description: "Ad hoc articles from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: articles.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date.datetime,
			description: post.snippet,
			link: `/wrote/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
