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

	console.log(arr);
}

let show = function () {
	let niitTodos = "";

	arr.forEach(function (aa) {
		niitTodos += aa.todo;
	});

	// for (let i = 0; i < arr.length; i++) {
	// 	niitTodos = niitTodos + arr[i].todo;
	// }

	output.innerHTML = niitTodos;
};

function deleteTodo(deleteId) {
	let arr2 = [];
	console.log("===========> BID NARIIN ID", deleteId);
	// console.log("===============> ", ustgahElementiinId);
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i].id !== deleteId) {
	// 		arr2.push(arr[i]);
	// 	}
	// }

	arr.forEach(function (el) {
		if (el.id !== deleteId) {
			arr2.push(el);
		}
	});

	arr = arr2;
	show();
}

function resetInput() {
	input.value = "";
}

btn.addEventListener("click", btniiFunction);
function btniiFunction() {
	let completed = false;
	let id = Math.floor(Math.random() * 10000000);
	let value = `<p>${input.value}  <button onclick="boldBolgodog('${input.value}',${id})">Bold</button><button onclick="deleteTodo(${id})">del</button></p>`;

	// console.log(value);
	// utga nemdeg function
	addTodo(value, id, completed);
	// reset hiideg function
	resetInput();
	// doc deer haruuldag function
	show();
}

function boldBolgodog(value, id) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id === id) {
			arr[
				i
			].todo = `<p style="font-weight: bold">${value}  <button onclick="boldBolgodog(${id})">Bold</button><button onclick="deleteTodo(${id})">del</button></p>`;
		}
	}
	console.log(arr);
	show();
	// console.log("bold bolcloo");
}
// function com(completedTodoId) {
// onclick="com(${id})">${input.value}
// 	console.log("================>", completedTodoId);
// 	arr.forEach((el) => {
// 		if (el.id === completedTodoId) {
// 			el.completed = true;

// 			let x;
// 			if (el.completed === true) {
// 				x = "lineT";
// 			} else {
// 				x = "";
// 			}

// 			el.todo = `<h1 class="${x}">dasdasd</h1>`;
// 		}
// 	});
// 	show();
// 	console.log(arr);
// }

let xx = [2, 4, 5];
xx[2] = 10;
console.log(xx);
