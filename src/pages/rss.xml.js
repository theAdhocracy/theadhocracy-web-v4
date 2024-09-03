import rss from "@astrojs/rss";

export async function GET(context) {
	const data = await fetch("https://cms.theadhocracy.co.uk/everything.json", {
		method: "GET",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${import.meta.env.CRAFT_API_KEY}`,
		},
	});
	const response = await data.json();

	return rss({
		title: "theAdhocracy | RSS",
		description: "Ad hoc thoughts from an ad hoc mind.",
		site: context.site,
		trailingSlash: false,
		items: response.data.slice(0, 12).map((post) => ({
			title: post.title,
			pubDate: post.date,
			description: post.snippet,
			link: `/${post.type === "articles" ? "wrote" : "note"}/${post.slug}`,
		})),
		customData: `<language>en-gb</language>`,
	});
}
