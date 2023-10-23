//TODO References-Object,Array

//? primitives-number,string,null,boolean,undefined
// var a = 3;
// var b = a;
// b++;
// console.log(b);
// console.log(a);
// reference
// var arr = [1, 2, 3];
// var arr2 = arr;
// arr[1] = 100;
// console.log(arr2);
// console.log(arr);
// function a(a) {
//   var x = []

//   x[2] = "tyuiop";
// }
// a(arr2);
// console.log(arr2);

var x = [
  { name: "Svhee", age: 12 },
  { name: "Ganaa", age: 33 },
  { name: "Urnaa", age: 55 },
  { name: "Boldoo", age: 77 },
];
// OBJECT
var x = {
  a: 3,
  b: "asa",
  c: [1, 2, 3],
  d: function () {
    console.log("aaa");
  },
  e: true,
};

var y = x;
y.a = 5;
// console.log(x["a"]);
// var k = [1, 2, 3];
// console.log(x["c"]);
// console.log(x["d"]);

// console.log(x.a);

// console.log('Svhee 12-toi')
// console.log(x[0].name);

// var y = [[1, 2], [2, 3], {}];

// for (var i = 0; i < 2; i++) {
//   console.log(y[i][0] + y[i][1]);
// }

// console.log(y[0][0]);

// var x = [
//   { name: "Svhee", age: 12 },
//   { name: "Ganaa", age: 33 },
//   { name: "Urnaa", age: 55 },
//   { name: "Boldoo", age: 77 },
// ];
// for (var i = 0; i < x.length; i++) {
//   console.log(x[3]);
// }
