/**
 * repository for todos and
 * functions to manage it
 */

const todoList = {
  list: [],

  addTodo: (obj) => {
    this.list.push(obj);
  },
};

export default todoList;
