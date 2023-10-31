// Class

// class Todo {
// 	constructor(todo, id, completed = false) {
// 		this.todo = todo;
// 		this.id = id;
// 		this.completed = completed;
// 	}

// 	hello() {
// 		console.log("TODO");
// 	}
// }

// let a = new Todo("Hool ideh", 2, true);
// let b = new Todo("untah", 3, false);
// console.log(a);
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const todos = document.querySelector(".todos");

let arr = [];
class Todo {
	constructor(todo, id, completed) {
		this.todo = todo;
		this.id = id;
		this.completed = completed;
	}

	nemeh() {
		console.log("first");
	}
}

btn.addEventListener("click", () => {
	let todo = new Todo(input.value, 3, false);
	arr.push(todo);
	console.log(arr);
});
