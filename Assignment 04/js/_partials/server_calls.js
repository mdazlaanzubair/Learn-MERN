const base_url = "https://todocrudserver.herokuapp.com";

// get todos from the server
export const getTodos = async () => {
  const response = await fetch(`${base_url}/index`, {
    method: "GET",
  });

  const todo_data = response.json();
  return todo_data;
};

// push todo to the server
export const pushTodo = async (todoTitle) => {
  const response = await fetch(`${base_url}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: todoTitle }),
  });

  const todo_data = response.json();
  return todo_data;
};

// update todo to the server
export const updateTodo = async (todoTitle, todoId) => {
  const response = await fetch(`${base_url}/update/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: todoTitle }),
  });

  const todo_data = response.json();
  return todo_data;
};

// delete todo to the server
export const delTodo = async (todoId) => {
  const response = await fetch(`${base_url}/delete/${todoId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  const todo_data = response.json();
  return todo_data;
};
