import "../stylesheets/index.css";

import todoForm from "./form-view";
import todoListView from "./todo-list-view";
import subscribers from "./todo-list";

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const themeIcon = document.querySelector(".theme-icon");

  todoForm(mainContent);
  todoListView(mainContent);

  // todo-list subscribers;
  subscribers();

  themeIcon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("bg-dark");
    themeIcon.classList.toggle("theme-icon-dark")
  }
});
