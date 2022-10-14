// refactor object

const todoRepo = {
  todos: [],

  addTodo(obj) {
    this.todos.push(obj);
  },

  deleteTodo(id) {
    this.todos.splice(id, 0);
  },
};

export default todoRepo;
