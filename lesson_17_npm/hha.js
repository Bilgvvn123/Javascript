// const fs = require("fs");
const wiki = require("wikipedia");
(async () => {
	try {
		const page = await wiki.page("Joke");
		console.log(page);
		//Response of type @Page object
		const summary = await page.summary();
		// fs.writeFile("./batman.txt", "utf8", (body) => {});
		console.log(summary);
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
})();
