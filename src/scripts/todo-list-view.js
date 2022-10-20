/**
 * renders the container
 * for list of todos
 */

/* eslint no-param-reassign: ["error", { "props": false }] */

import PubSub from "pubsub-js";
import todoView from "./todo-view";
import menuView from "./menu";

// transfer the pubsub in todo-list

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

  const footer = content.querySelector("footer");
  const todosCont = content.querySelector("#task-container ul");
  const statsElem = content.querySelector("span.items-left");
  const clearBtn = content.querySelector("footer .button-clear");

  // Append menu
  menuView(footer);

  container.append(content);

  // Events
  clearBtn.onclick = () => removeElemContent(todosCont);

  // Pubsub
  PubSub.subscribe("addTodoUi", (msg, data) => {
    todoView(data);
  });

  PubSub.subscribe("updateStats", (msg, data) => {
    updateText(data, statsElem);
  });
};

export default todoListView;
