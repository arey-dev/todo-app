/**
 * renders todo-form from template
 */
import PubSub from "pubsub-js";
import todo from "./todo";

const createTask = () => {
  const input = document.forms.todo.elements["task-input"];

  if (input.value) {
    // create todo object
    const task = todo(input.value);

    input.value = "";

    // publish
    PubSub.publish("addTodo", task);
  }
};

const resetForm = (form) => {
  form.reset();
};

const todoForm = (container) => {
  const template = document.getElementById("todo-form-template");
  const content = template.content.cloneNode(true);
  
  const form = content.querySelector('form[name="todo"]');
  const input = content.querySelector('input[name="task-input"]');
  const checkBtn = content.querySelector(".check-btn");
  const removeBtn = content.querySelector(".remove-btn");
  
  container.append(content);

  checkBtn.onclick = () => createTask();

  removeBtn.onclick = () => resetForm(form);

  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  };

};

export default todoForm;
