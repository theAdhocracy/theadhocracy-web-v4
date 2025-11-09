import rss from "@astrojs/rss";
import { fetchCraftAPI } from "@/utilities/craft";

export async function GET(context) {
	const notes = await fetchCraftAPI("notes.json");

	return rss({
		title: "theAdhocracy | Notes",
		description: "Ad hoc notes from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: notes.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date.datetime,
			description: post.snippet,
			link: `/note/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
