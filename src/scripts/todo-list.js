/**
 * repository for todos and
 * functions to manage it
 */

const todoList = {
  list: [],

  addTodo(obj) {
    this.list.push(obj);
  },

  deleteTodo(id) {
    this.list.splice(id, 1);
  }
};

export default todoList;
