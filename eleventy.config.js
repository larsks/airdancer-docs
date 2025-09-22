import { IdAttributePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("content/CNAME");
	eleventyConfig.addPassthroughCopy("content/img/");
	eleventyConfig.addPassthroughCopy("content/css/");
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addPlugin(IdAttributePlugin);

	return {
		dir: {
			input: "content",
		},
	};
}
