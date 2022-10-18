/**
 * renders the container
 * for list of todos
 */
import PubSub from "pubsub-js";
import todoList from "./todo-list";
import todoView from "./todo-view";

const todosView = (container) => {
  const template = document.getElementById("todo-list-template");
  const listContainer = template.content.cloneNode(true);

  container.append(listContainer);

  const addTodoBound = todoList.addTodo.bind(todoList);
  PubSub.subscribe("addTodo", (msg, data) => {
    addTodoBound(data);
  });

  PubSub.subscribe("addTodo", (msg, data) => {
    todoView(data);
  });
};

export default todosView;
