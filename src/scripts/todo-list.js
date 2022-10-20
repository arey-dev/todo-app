/**
 * repository for todos and
 * functions to manage it
 *
 * TRANSFER ALL PUBSUB METHODS TO ANOTHER FILE, E.G CONTROLLER
 */
import PubSub from "pubsub-js";

const todoList = {
  list: [],

  addTodo(obj) {
    // checks if the input already exist in the list
    const item = this.list.find(
      (itm) => itm.getTitle().toLowerCase() === obj.getTitle().toLowerCase()
    );

    // add the input if it's not in the list yet
    if (!item) {
      this.list.push(obj);
      PubSub.publish("addTodoUi", obj);
      PubSub.publish("updateStats", this.list.length);
    }
  },

  deleteTodo(title) {
    this.list = this.list.filter((obj) => obj.getTitle() !== title);
    PubSub.publish("updateStats", this.list.length);
  },

  // change to clear complete
  clearList() {
    this.list = [];
    PubSub.publish("updateStats", this.list.length);
  },
};

export default function subscribers() {
  // to be put on another file
  PubSub.subscribe("addTodo", (msg, data) => {
    todoList.addTodo(data);
  });
  PubSub.subscribe("removeTodo", (msg, data) => {
    todoList.deleteTodo(data);
  });

  PubSub.subscribe("clearTodos", () => {
    todoList.clearList();
  });

  PubSub.subscribe("toggleState", (msg, data) => {
    todoList.list.forEach((obj) => {
      if (obj.getTitle() === data) {
        obj.toggleState();
      }
    });
  });
}
