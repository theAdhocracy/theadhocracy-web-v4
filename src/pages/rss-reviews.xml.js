import rss from "@astrojs/rss";
import { fetchCraftAPI } from "@/utilities/craft";

export async function GET(context) {
	const reviews = await fetchCraftAPI("reviews.json");

	return rss({
		title: "theAdhocracy | Reviews",
		description: "Ad hoc reviews from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: reviews.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.updated.datetime,
			description: post.desc ? post.desc : "",
			link: `/review/${post.type.slug}/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
