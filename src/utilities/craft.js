import * as dotenv from "dotenv";

// Enable env vars
dotenv.config();

// Fetch data from the API
export const fetchCraftAPI = async (endpoint) => {
	const data = await fetch(`https://cms.theadhocracy.co.uk/${endpoint}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.CRAFT_API_KEY}`,
		},
	})
		.then(async (response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			const data = await response.json();
			if (data.data) return data.data;
			return data;
		})
		.catch((error) => {
			console.error(`${error}`);
		});

	return data;
};
