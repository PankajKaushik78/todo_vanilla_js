const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



todoButton.addEventListener('click', addTodo);



function addTodo(event) {
    //preventing form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //creating a Todo
    const newTodo = document.createElement('li');

}