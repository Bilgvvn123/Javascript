// HOISTING
let a;
// a = undefined;

// aaa();

// let aaa = function () {
// 	console.log("first");
// };

// console.log(a);

let numbers = [
	{ name: "num1", age: 33 },
	{ name: "Svhee", age: 55 },
];
let arr = [];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i].age !== 55) {
		arr.push(numbers[i]);
	}
}

console.log(arr);
// a = 5;
