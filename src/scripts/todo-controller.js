const todos = [];

const todoController = {
  addTodo(obj) {
    todos.push(obj);
  },

  deleteTodo(id) {
    todos.splice(id, 0);
  },
}

export default todoController;