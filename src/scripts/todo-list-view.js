/**
 * renders the container
 * for list of todos
 */
import PubSub from "pubsub-js";
import todoList from "./todo-list";
import todoView from "./todo-view";

const removeTodoUi = (event) => {
  // eslint-disable-next-line prefer-destructuring
  const target = event.target;

  if (event.target.classList.contains("cross")) {
    const li = target.closest("li");
    li.remove();
  }
};

const todosView = (container) => {
  const template = document.getElementById("todo-list-template");
  const content = template.content.cloneNode(true);

  const listCont = content.querySelector("#task-container ul");

  container.append(content);

  listCont.onclick = removeTodoUi;

  const addTodoBound = todoList.addTodo.bind(todoList);
  PubSub.subscribe("addTodo", (msg, data) => {
    addTodoBound(data);
  });

  PubSub.subscribe("addTodo", (msg, data) => {
    todoView(data);
  });

  // add pubsub topic for remove todo
};

export default todosView;
