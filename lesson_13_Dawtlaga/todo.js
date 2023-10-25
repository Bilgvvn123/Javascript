const btn = document.querySelector(".btn");
const output = document.querySelector(".todos");
const input = document.querySelector(".input");

//
let arr = [];

function addTodo(utga, todoId, completed) {
	let newValue = {
		todo: utga,
		id: todoId,
		completed: completed,
	};

	// console.log(newValue);

	// push
	arr.push(newValue);

	// console.log(arr);
}

let show = function () {
	let niitTodos = "";

	for (let i = 0; i < arr.length; i++) {
		niitTodos = niitTodos + arr[i].todo;
	}

	output.innerHTML = niitTodos;
};

function deleteTodo(deleteId) {
	let arr2 = [];
	console.log("===========> BID NARIIN ID", deleteId);
	// console.log("===============> ", ustgahElementiinId);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id !== deleteId) {
			arr2.push(arr[i]);
		}
	}

	arr = arr2;
	show();
	console.log(arr);
	console.log(arr2);
}

function resetInput() {
	input.value = "";
}

btn.addEventListener("click", btniiFunction);
function btniiFunction() {
	let completed = false;
	let id = Math.floor(Math.random() * 10000000);
	let value = `<p onclick="com('${input.value}',${id})">${input.value} <button onclick="deleteTodo(${id})">del</button></p>`;

	console.log(value);
	// utga nemdeg function
	addTodo(value, id, completed);
	// reset hiideg function
	resetInput();
	// doc deer haruuldag function
	show();
}

function com(utga, id) {
	console.log(id);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id == id) {
			// console.log(arr[i]);
			arr[i].completed = !arr[i].completed;
			let x = arr[i].completed === true ? "lineT" : "";

			arr[
				i
			].todo = `<p class="${x}" onclick="com('${utga}',${id})">${utga} <button onclick="deleteTodo(${id})">del</button></p>`;

			console.log(arr[i]);
		}
	}

	show();
}
