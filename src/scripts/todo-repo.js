// refactor object

const todoRepo = {
  todos: [],

  addTodo(obj) {
    this.todos.push(obj);
  },

  deleteTodo(id) {
    this.splice(id, 0);
  },
}

export default todoRepo;