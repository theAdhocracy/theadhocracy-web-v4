import rss from "@astrojs/rss";

export async function GET(context) {
	const data = await fetch("https://cms.theadhocracy.co.uk/notes.json", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${import.meta.env.CRAFT_API_KEY}`,
		},
	});
	const response = await data.json();

	return rss({
		title: "theAdhocracy | Notes",
		description: "Ad hoc notes from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: response.data.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date,
			description: post.snippet,
			link: `/note/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
