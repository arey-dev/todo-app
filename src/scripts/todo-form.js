/**
 * renders todo-form from template
 */

const todoForm = (container) => {
  const template = document.getElementById("todo-form-template");
  const form = template.content.cloneNode(true);

  container.append(form);
};

export default todoForm;
