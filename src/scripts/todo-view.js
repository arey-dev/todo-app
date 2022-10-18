/**
 * function that renders
 * todo object upon submit
 */

const todoView = (obj) => {
  const template = document.getElementById("task-template");
  const taskElem = template.content.cloneNode(true);

  const taskTitle = taskElem.querySelector(".task p");
  taskTitle.textContent = obj.getTitle();

  document.querySelector("#task-container .task-list").append(taskElem);
};

export default todoView;
