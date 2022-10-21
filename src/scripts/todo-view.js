/**
 * function that renders
 * todo object upon submit
 */
import PubSub from "pubsub-js";

const todoView = (obj) => {
  const template = document.getElementById("task-template");
  const content = template.content.cloneNode(true);

  const title = content.querySelector(".task p");
  title.textContent = obj.getTitle();

  const titleText = title.textContent;
  const taskElem = content.querySelector("li.task");
  const removeBtn = content.querySelector(".remove-btn");
  const checkBtn = content.querySelector(".check-btn");
  const check = content.querySelector(".check");

  // incorporate something like "debounce function"
  // in case of rapid key press on check button
  checkBtn.onclick = () => {
    check.classList.toggle("check-hover");
    taskElem.classList.toggle("task-complete");

    PubSub.publish("toggleState", titleText);
  };

  removeBtn.onclick = () => {
    PubSub.publish("removeTodo", titleText);

    taskElem.remove();
  };

  document.querySelector("#task-container .task-list").append(content);
};

export default todoView;
