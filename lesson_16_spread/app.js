// SPREAD
// Array
let x = [1, 2, 3, 89, 22];
let y = [4, 6, 7];
y = [...y, ...x];

// console.log(...name: 22 });
// console.log([2, 5, 6, 7, ...[8, 9, 10]]);

// Object
const a = {
	name: 222,
};

let b = {
	age: 22,
	...a,
};

// console.log(b);

// REST
function aa(...a) {
	console.log(a);
}
const ar = [2, 5, 6, 7, 8];
aa(ar);
