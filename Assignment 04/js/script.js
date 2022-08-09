let todos_list = [
  { id: Date.now() + 1, title: "hello0", isCompleted: false },
  { id: Date.now() + 2, title: "hello1", isCompleted: false },
  { id: Date.now() + 3, title: "hello2", isCompleted: false },
  { id: Date.now() + 4, title: "hello3", isCompleted: false },
  { id: Date.now() + 5, title: "hello4", isCompleted: false },
  { id: Date.now() + 6, title: "hello5", isCompleted: false },
];

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
const addTodo = () => {
  const todo = { id: Date.now(), title: user_input.value, isCompleted: false };
  todos_list.push(todo);
  user_input.value = "";
  createTodo(todo);
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

  // creating action btns
  const btn_group = document.createElement("div");

  const task_editBtn = document.createElement("button");
  task_editBtn.classList.add(
    "btn",
    "border-0",
    "btn-sm",
    "btn-outline-info",
    "mx-1",
    "px-1"
  );

  const editIcon = document.createElement("i");
  editIcon.classList.add("bi", "bi-pencil-square", "mx-1");

  task_editBtn.append(editIcon);
  task_editBtn.setAttribute("onclick", `editTodo(this, ${task.id})`);

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
  task_delBtn.setAttribute("onclick", `deleteTodo(this, ${task.id})`);

  btn_group.append(task_editBtn, task_delBtn);

  // constructing task item
  task_item.append(btn_group);

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
const editTodo = (e, id) => {
  const task_item = e.parentElement.parentElement;
  task_item.remove();

  user_input.value = task_item.innerText;

  todos_list = todos_list.filter(function (todo) {
    return todo.id !== id;
  });
  console.log(todos_list);
};

// function to delete todo item
const deleteTodo = (e, id) => {
  const task_item = e.parentElement.parentElement;
  task_item.remove();

  const del_todo = todos_list.filter(function (todo) {
    return todo.id === id;
  });
  console.log(del_todo[0].title);
};

showTodos();
