//TODO DOM - DOCUMENT OBJECT MODEL
// DOM modnoos elementiig barij tuhain elementee uurcluh, ustgah eswel element vvsgeed nemej, hasah. Uuruur: DOM modtoi haritsah tyehnology ym.

// document.querySelector(".div").innerHTML = "<h1>HELLO DOM</h1>";

// SELECT - QUERYSELECTOR
// document.querySelector("#");
// document.querySelector(".");

//TODO QuerySelectorAll
// var a = document.querySelectorAll(".aa");
// a[0].innerHTML = "<h1 class='aa'>AA</h1>";
// console.log(a);

//TODO getElementById
// document.getElementById("dasda");

// #CREATE ELEMENT
// var h1E2 = document.createElement("h1");
// var x = 21231;
// h1.innerText = "AA";
//TODO BODY
// document.body
//  ``-backtick
// console.log(`ds${x}ada`);

//TODO CREATE ELEMENTS
// var x = document.querySelector(".aaa");

// var div = document.createElement("div");
// var div1 = document.createElement("div");

//TODO textContent
// div.textContent = "utga";
// div1.textContent = "utgaa";

//TODO add class
// div.classList.add("o");
// x.appendChild(div);
// console.log(div);

//TODO append
// x.appendChild(div1);

// var element = document.querySelector(".aaa");
// var elementH1 = document.createElement("h1");
// elementH1.innerText = "Hello World!";
// elementH1.classList.add("aaaa");
// element.appendChild(elementH1);

//TODO addEventListener
// element.addEventListener("click", func1);
// function func1() {
//   console.log("first");
//   var a = document.createElement("i");
//   a.textContent = "AAAAAAAAAAAAA";
//   document.body.appendChild = a;
// }
// a = <i>AAAAAAAAAAA</i>;

var x = document.querySelector(".burgerMenu");
var menu = document.querySelector(".menu");

x.addEventListener("click", showMenu);
function showMenu() {
  menu.classList.toggle("gargii");
  console.log("a");
  var d = document.querySelector(".p");
  //   d.classList.toggle("aaa");
}

var arr = [];
var a = [2, 3, 5, 2];
// a[a.length] = 5;
// a.length = 10;
// arr.push(a);
console.log(a);
