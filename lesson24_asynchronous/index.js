const axios = require("axios");

let a = [];
async function data() {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	console.log(res.data);
	a = res.data;
}

if (a.length !== 0) {
}

// package - npm init -y
// axios - npm i axios
// import - const axios = require("axios");
// jsonplaceholder.typicode.com
