const fs = require("fs");

fs.readFile("./aaa.txt", "utf-8", (err, data) => {
	console.log(data);
});
