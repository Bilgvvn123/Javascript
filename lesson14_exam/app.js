// 2
// let s = 0;
// let k = 0;

// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		s += k;
// 	}
// 	k++;
// }

// console.log(s);

// 3
// let s = 0;
// let k = 0;
// for (let i = 20; i <= 50; i++) {
// 	if (k <= 10) {
// 		s += k;
// 	}

// 	k++;
// }

// console.log(s);

// 4

// function exam4(a) {
// 	return String(a) + a;
// }

// console.log(exam4(44));

// 5
// let arr = [
// 	Math.floor(Math.random() * 10 + 1),
// 	Math.floor(Math.random() * 10 + 1),
// 	Math.floor(Math.random() * 10 + 1),
// ];

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 50; i++) {
// 	arr.push(Math.floor(Math.random() * 10 + 1));
// }

// console.log(arr);

// LOGIC OPERATORS
// || - OR, && - AND, ! - NOT

// 8
let named = "boldoo";

// let shineName = named[0].toUpperCase();
// let x = "";

// for (let i = 0; i < named.length; i++) {
// 	if (i === 0) {
// 		x = x + named[i].toUpperCase();
// 	} else {
// 		x = x + named[i];
// 	}
// }

// console.log(x);

// 11
// let arr = [
// 	{
// 		name: "Joy",
// 		age: 22,
// 		gmail: "joy111@gmail.com",
// 		address: ["USA", "J Penny 18 street", 336],
// 	},
// 	{
// 		name: "Kevin",
// 		age: 24,
// 		gmail: "User321@gmail.com",
// 		address: ["UK", "Salvador", 6],
// 	},
// 	{
// 		name: "Ganerdene",
// 		age: 42,
// 		gmail: "GanaaG@gmail.com",
// 		address: ["MN", "", 18],
// 	},
// ];

// let nas = 0;
// for (let i = 0; i < arr.length; i++) {
// 	nas = nas + arr[i].age;
// }

// let dundajNas = nas / arr.length;

// console.log(dundajNas);

// 12
let s = "";
let k = "";
let words = "qwertyui";

for (let i = 0; i < words.length; i++) {
	k += words[i];
	s += " " + k;
}

console.log(s);
