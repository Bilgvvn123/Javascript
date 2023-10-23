// primitive - reference
//TODO primitive - boolean, string, null, undefined, number
//TODO reference - object, array

// let num = 10;
// let a = num;
// a = 5;

// console.log(num);
// console.log(a);

// let arr = [1, 2, 3];
// let arr2 = arr;
// arr2[0] = 100;

// console.log(arr)

// TODO undefined, null
// var a;
// a = [];
// a = 2;
// a = null;

// console.log(a);

//TODO algorithm types
// Shugiman - shuluun
// Salaalsan - huwaagdana (if)
// Dawtaltad -

//TODO if
// let a = 5;
// if( ){

// }

// for (let i = 0; i < 5; i++) {
// }

// if (false) {
//   console.log("v");
// } else if (true) {
//   console.log(first);
// } else {
//   console.log(first);
// }

// var a = 17;

// console.log(Math.floor(Math.random() * 10));
// let s = 0;
// let c = 50;
// for (let i = 0; i <= 100; i++) {
//   if (c < 71) {
//     s = s + c;
//   }
//   c++;
//   console.log(c);
// }
// console.log(s);

// array - massive
// let hairtsag = [{ a: 1, b: 2 }, { a: 1 }, { a: 1, k: 2 }];
// console.log(hairtsag[2].k + 1);

// object
// const b = [1];

// const a = {
//   a: 1,
//   b: (a, b, c) => a,
// };
// console.log(a.b(10));

// statement, expression
// function FuncNer() {}

// let FuncNer2 = function () {};

//TODO void
// function func() {
//   console.log("first");
// }

//TODO return
// function func2() {
//   return function () {
//     return [
//       function () {
//         return "hahahahaha";
//       },
//     ];
//   };
// }

// let duudsanArray =;
// console.log();
// console.log(func2()()[0]());

// function fnNer(x, y, z = true) {
//   return x + 2;
// }

// console.log(fnNer(22, [1, 1, 21]));

// MATH
// console.log(Math.floor(2.2));
// console.log(Math.ceil(2.2));
// console.log(Math.round(2.5));
// console.log(Math.sqrt(9))
// console.log(Math.pow(5, 3));
// console.log(Math.abs(2));
// console.log(Math.floor(Math.random() * 20 + 31));

// console.log(typeof +"2");
// console.log(Math.floor(Math.random() * 5 + 17 - 1));
// console.log(Math.floor(Math.random() * 5 + 17 - 1));

let x = document.querySelector(".click");
let y = document.querySelector(".click2");

x.addEventListener("click", () => {
  let color = () => Math.floor(Math.random() * 255 + 1);
  let tooPx = Math.floor(Math.random() * 1000);
  let tooPy = Math.floor(Math.random() * 200 + 50);
  x.innerHTML = `<h1 style="font-size:${tooPy}px;position:relative;left:${tooPx}px;color:rgb(${color()},${color()},${color()})">${Math.floor(
    Math.random() * 100 + 1
  )}</h1>`;
});
