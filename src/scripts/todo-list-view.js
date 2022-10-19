/**
 * renders the container
 * for list of todos
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

import PubSub from "pubsub-js";
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

const removeElemContent = (elem) => {
  elem.innerHTML = "";
  PubSub.publish("clearTodos");
};

// updates the text content of an element
const updateText = (data, elem) => {
  elem.textContent = data;
};

const todoListView = (container) => {
  const template = document.getElementById("todo-list-template");
  const content = template.content.cloneNode(true);

  const todosCont = content.querySelector("#task-container ul");
  const statsElem = content.querySelector("span.items-left");
  const clearBtn = content.querySelector("footer .button-clear");

  container.append(content);

  todosCont.onclick = removeTodoUi;

  clearBtn.onclick = () => removeElemContent(todosCont);

  PubSub.subscribe("addTodoUi", (msg, data) => {
    todoView(data);
  });

  PubSub.subscribe("updateStats", (msg, data) => {
    updateText(data, statsElem);
  });
};

export default todoListView;
