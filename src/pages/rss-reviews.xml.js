import rss from "@astrojs/rss";

export async function GET(context) {
	const data = await fetch("https://cms.theadhocracy.co.uk/reviews.json", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${import.meta.env.CRAFT_API_KEY}`,
		},
	});
	const response = await data.json();

	return rss({
		title: "theAdhocracy | Reviews",
		description: "Ad hoc reviews from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: response.data.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.updated,
			description: post.desc,
			link: `/review/${post.type.slug}/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
