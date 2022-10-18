/**
 * renders todo-form from template
 */
import PubSub from "pubsub-js";
import todo from "./todo";

const createTask = () => {
  const input = document.forms[0].elements["task-input"];

  if (input.value) {
    // create todo object
    const task = todo(input.value);

    input.value = "";

    // publish
    PubSub.publish("addTodo", task);
  }
};

const todoForm = (container) => {
  const template = document.getElementById("todo-form-template");
  const form = template.content.cloneNode(true);

  const btn = form.querySelector('[role="button"]');
  const input = form.querySelector('input[name="task-input"]');

  btn.onclick = createTask;

  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  };

  // btn.onclick = createTask;

  container.append(form);
};

export default todoForm;
