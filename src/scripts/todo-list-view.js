/**
 * renders the container
 * for list of todos
 */

const todosView = (container) => {
  const template = document.getElementById("todo-list-template");
  const listCont = template.content.cloneNode(true);

  container.append(listCont);
};

export default todosView;
