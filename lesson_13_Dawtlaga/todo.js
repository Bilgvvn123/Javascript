const btn = document.querySelector(".btn");
const output = document.querySelector(".todos");
const input = document.querySelector(".input");

let arr = [];
let arr2 = [];

let addTodo = function (value, todoId) {
	let newValue = {
		todo: value,
		id: todoId,
		completed: false,
	};

	arr.push(newValue);

	return 3;
};

let show = function () {
	let niitTodos = "";

	for (let i = 0; i < arr.length; i++) {
		niitTodos += arr[i].todo;
	}

	output.innerHTML = niitTodos;
};

function deleteTodo(id) {
	// console.log("===============> ", id);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id !== id) {
			arr2.push(arr[i]);
			console.log("first");
		}
	}

	show();
}

btn.addEventListener("click", () => {
	let id = Math.floor(Math.random() * 10000000);
	let value = `<p>${input.value} <button onclick="deleteTodo(${id})">delete</button></p>`;
	// utgaa nemlee
	addTodo(value, id);

	// reset
	input.value = "";

	// doc deer haruullaa
	show();

	console.log(arr);
});
