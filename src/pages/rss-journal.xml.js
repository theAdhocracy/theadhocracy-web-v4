import rss from "@astrojs/rss";
import { fetchCraftAPI } from "@/utilities/craft";

export async function GET(context) {
	const journals = await fetchCraftAPI("journals.json");

	return rss({
		title: "theAdhocracy | Journal",
		description: "Ad hoc experiences from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: journals.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date.datetime,
			description: post.snippet,
			link: `/wrote/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
