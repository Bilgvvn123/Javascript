const btn = document.querySelector(".btn");
const output = document.querySelector(".todos");
const input = document.querySelector(".input");

//
let arr = [];
let arr2 = [];

function shineHiihymNemeh(utga, todoId) {
	let newValue = {
		hiihYm: utga,
		hiihYmniiId: todoId,
		gvitsetgesenEseh: false,
	};

	arr.push(newValue);

	console.log(arr);
}

// arr = [
// 	{
// 		hiihYm: "ideh",
// 		hiihYmniiId: 5000,
// 		gvitsetgesenEseh: false,
// 	},
// 	{
// 		hiihYm: "untah",
// 		hiihYmniiId: 5678900,
// 		gvitsetgesenEseh: false,
// 	},
// ];

let htmlDeerHaruulah = function () {
	let niitTodos = "";

	for (let i = 0; i < arr.length; i++) {
		niitTodos = niitTodos + arr[i].hiihYm;
	}

	output.innerHTML = niitTodos;
};

function deleteTodo(ustgahElementiinId) {
	// console.log("first", ustgahEliinId);
	// console.log("===============> ", ustgahElementiinId);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].hiihYmniiId !== ustgahElementiinId) {
			arr2.push(arr[i]);
		}
	}

	arr = arr2;
	arr2 = [];

	htmlDeerHaruulah();
	console.log(arr);
}

function btniiFunction() {
	let id = Math.floor(Math.random() * 10000000);

	console.log("=============> ID", id);

	let value = `<p>${input.value} <button onclick="deleteTodo(${id})">delete</button>`;

	console.log("=============>", value);
	// utga nemdeg function
	shineHiihymNemeh(value, id);

	// reset hiideg function
	input.value = "";

	// doc deer haruuldag function
	htmlDeerHaruulah();

	// console.log(arr);
}

btn.addEventListener("click", btniiFunction);

let x = [1, 2, 3, 89, 22];
let y = [4, 6, 7];
y = [...y, ...x];
console.log(...{ name: 22 });
// console.log([2, 5, 6, 7, ...[8, 9, 10]]);
