// loading server functions
import * as serv_func from "./_partials/server_calls.js";

let todos_list = await serv_func.getTodos();

// getting UI elements
let user_input = document.getElementById("userInput");
let err_msg = document.getElementById("errMsg");
let todo_holder = document.getElementById("list_holder");
let form = document.getElementById("taskForm");

// form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidate();
});

// form validation function
const formValidate = () => {
  if (user_input.value === "") {
    err_msg.innerText = "Task cannot be blank!";
  } else {
    err_msg.innerText = "";
    addTodo();
  }
};

// add todo function
const addTodo = async () => {
  const todo = { id: Date.now(), title: user_input.value, isCompleted: false };
  todos_list.push(todo);
  user_input.value = "";
  // created todo on client side
  createTodo(todo);

  // pushing todo to the server
  todos_list = await serv_func.pushTodo(todo.title);
};

// create todo UI element function
const createTodo = (task) => {
  // creating list item
  const task_item = document.createElement("li");
  task_item.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "bg-dark"
  );
  task_item.setAttribute("id", `task-${task.id}`);
  task_item.innerText = task.title;
  task_item.addEventListener("dblclick", (e) => {
    editTodo(task.id);
  });

  // creating action btns
  const task_delBtn = document.createElement("button");
  task_delBtn.classList.add(
    "btn",
    "border-0",
    "btn-sm",
    "btn-outline-danger",
    "mx-1",
    "px-1"
  );

  const delIcon = document.createElement("i");
  delIcon.classList.add("bi", "bi-trash3", "mx-1");

  task_delBtn.append(delIcon);
  task_delBtn.addEventListener("click", (e) => {
    deleteTodo(task.id);
  });

  // constructing task item
  task_item.append(task_delBtn);

  // pushing task item to UI
  todo_holder.append(task_item);
};

// function to display all todo items
const showTodos = () => {
  // looping through todo list to populate todos on client side
  for (const todo in todos_list) {
    const task = todos_list[todo];
    createTodo(task);
  }
};

// function to edit todo item
const editTodo = async (todoId) => {
  const task_item = document.getElementById(`task-${todoId}`);
  task_item.remove();

  user_input.value = task_item.innerText;

  todos_list = todos_list.filter(function (todo) {
    return todo.id !== todoId;
  });

  // deleting todo from database
  todos_list = await serv_func.delTodo(todoId);
};

// function to delete todo item
const deleteTodo = async (todoId) => {
  // deleting todos from client side
  const task_item = document.getElementById(`task-${todoId}`);
  task_item.remove();
  todos_list = todos_list.filter(function (todo) {
    return todo.id != todoId;
  });

  // deleting todo from database
  todos_list = await serv_func.delTodo(todoId);

  console.log(todos_list);
};

// showing todo when loaded
showTodos();
console.log(todos_list)
