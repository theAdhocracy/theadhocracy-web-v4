import * as dotenv from "dotenv";
import { algoliasearch } from "algoliasearch";

// Enable env vars
dotenv.config();

// #1 Initialise the Algolia client
const client = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_ADMIN_KEY
);

// #2 Build search records

// Fetch all blog content
const blogData = await fetch("https://cms.theadhocracy.co.uk/everything.json", {
	method: "GET",
	headers: {
		"content-type": "application/json",
		Authorization: `Bearer ${process.env.CRAFT_API_KEY}`,
	},
});
const blogResponse = await blogData.json();

// Fetch all review content
const reviewData = await fetch("https://cms.theadhocracy.co.uk/reviews.json", {
	method: "GET",
	headers: {
		"content-type": "application/json",
		Authorization: `Bearer ${process.env.CRAFT_API_KEY}`,
	},
});
const reviewResponse = await reviewData.json();

// #3 Format search records
const blogs = blogResponse.data.map((blog) => {
	return {
		objectID: blog.id,
		title: blog.title,
		slug: blog.slug,
		categories: blog.categories,
		tags: blog.tags,
		silo: blog.silo,
		contentType: blog.type,
		sanitised: blog.sanitised,
		date: blog.date,
		year: blog.year,
		month: blog.month,
	};
});

const reviews = reviewResponse.data.map((review) => {
	return {
		objectID: review.id,
		title: review.title,
		slug: review.slug,
		rating: review.rating,
		type: review.type.slug,
		sanitised: review.desc.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " "),
		date: review.date,
		updated: review.updated,
		latestReview: review.latestDate,
		author: review.author,
		series: review.series,
		collections: review.collections,
	};
});

// #4 Send records to Algolia
await client
	.partialUpdateObjects({
		indexName: "theAdhocracy_Feed_v4",
		objects: blogs,
		createIfNotExists: true,
	})
	.then((res) => console.log(res));

await client
	.partialUpdateObjects({
		indexName: "theAdhocracy_Reviews_v4",
		objects: reviews,
		createIfNotExists: true,
	})
	.then((res) => console.log(res));
