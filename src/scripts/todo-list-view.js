/**
 * renders the container
 * for list of todos
 */
import PubSub from "pubsub-js";
import todoList from "./todo-list";
import todoView from "./todo-view";

// transfer the pubsub in todo-list
const removeTodoUi = (event) => {
  // eslint-disable-next-line prefer-destructuring
  const target = event.target;

  if (event.target.classList.contains("remove-btn")) {
    const li = target.closest("li");
    const title = li.querySelector(".title").textContent;

    li.remove();

    PubSub.publish("removeTodo", title);
  }
};

const todosView = (container) => {
  const template = document.getElementById("todo-list-template");
  const content = template.content.cloneNode(true);

  const listCont = content.querySelector("#task-container ul");

  container.append(content);

  listCont.onclick = removeTodoUi;

  // to be put on another file
  const addTodoBound = todoList.addTodo.bind(todoList);
  PubSub.subscribe("addTodo", (msg, data) => {
    addTodoBound(data);
  });

  PubSub.subscribe("addTodoUi", (msg, data) => {
    todoView(data);
  });

  // add pubsub topic for remove todo
  const delTodoBound = todoList.deleteTodo.bind(todoList);
  PubSub.subscribe("removeTodo", (msg, data) => {
    delTodoBound(data);
  });
};

export default todosView;
