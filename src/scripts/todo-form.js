/**
 * renders todo-form from template
 */
import PubSub from "pubsub-js";
import todo from "./todo";

const createTask = () => {
  const input = document.forms[0].elements['task-input'];

  const task = todo(input.value);

  // publish
  PubSub.publish("addTodo", task);
}

const todoForm = (container) => {
  const template = document.getElementById("todo-form-template");
  const form = template.content.cloneNode(true);

  const btn = form.querySelector('[role="button"]');

  btn.onclick = createTask;

  container.append(form);
};

export default todoForm;
