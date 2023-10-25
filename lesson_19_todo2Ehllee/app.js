let button = document.querySelector(".button");
let input = document.querySelector(".input");
let htmlTodos = document.querySelector(".todos");

let todos = [];
button.addEventListener("click", function () {
	let newValue = {
		todo: input.value,
		id: Math.floor(Math.random() * 10000000),
		completed: false,
	};

	todos.push(newValue);

	let x = "";
	for (let i = 0; i < todos.length; i++) {
		x += `<li style="background:blue" onclick="deleteTodo()">${todos[i].todo}</li>`;
	}

	htmlTodos.innerHTML = x;

	input.value = "";
});

// ------------------------------------------
function deleteTodo() {
	let THSaw = [];
	for (let i = 0; i < todos.length; i++) {}
}

// let obj = {
// 	name: "mendee",
// 	age: 19,
// 	address: {
// 		street: "rtyuio",
// 	},
// 	girlfriends: [
// 		"a",
// 		"b",
// 		"c",
// 		{
// 			nuutsNzOhin: "ganaa",
// 		},
// 	],
// };
