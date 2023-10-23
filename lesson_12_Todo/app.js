const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const todoss = document.querySelector(".todos");

let todos = [];

let todonuudiigGargajIrdegSumanFunc = () => {
  let localTodos = JSON.parse(localStorage.getItem("todos"));
  let str = "";
  for (let i of localTodos) {
    str += i;
  }
  todoss.innerHTML = str;
};

button.addEventListener("click", () => {
  todos.push(`<div style="color:blue">${input.value}</div>`);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";

  todonuudiigGargajIrdegSumanFunc();
});

todonuudiigGargajIrdegSumanFunc();

// todoss.innerHTML = str;
// todos.push(todo);
