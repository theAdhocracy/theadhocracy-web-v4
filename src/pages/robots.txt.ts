import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, site?: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
Host: ${site}
`;

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL("sitemap-index.xml", site);
	return new Response(getRobotsTxt(sitemapURL, site));
};
