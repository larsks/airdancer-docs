export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("content/CNAME");
	eleventyConfig.addPassthroughCopy("content/img/");
	eleventyConfig.addPassthroughCopy("content/css/");
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			input: "content",
		},
	};
}
