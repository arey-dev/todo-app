/**
 * function that renders
 * todo object upon submit
 */
import PubSub from "pubsub-js";

const todoView = (obj) => {
  const template = document.getElementById("task-template");
  const content = template.content.cloneNode(true);

  const p = content.querySelector(".task p");
  p.textContent = obj.getTitle();

  const title = p.textContent;
  const taskElem = content.querySelector("li.task");
  const removeBtn = content.querySelector(".remove-btn");
  const checkBtn = content.querySelector(".check-btn");
  const check = content.querySelector(".check");

  checkBtn.onclick = () => {
    check.classList.toggle("check-hover");
  };

  removeBtn.onclick = () => {
    PubSub.publish("removeTodo", title);

    taskElem.remove();
  };

  document.querySelector("#task-container .task-list").append(content);
};

export default todoView;
