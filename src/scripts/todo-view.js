/**
 * function that renders
 * todo object upon submit
 */

const todoView = (obj) => {
  const template = document.getElementById("task-template");
  const content = template.content.cloneNode(true);

  const taskTitle = content.querySelector(".task p");
  taskTitle.textContent = obj.getTitle();

  document.querySelector("#task-container .task-list").append(content);
};

export default todoView;
