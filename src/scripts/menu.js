/**
 * renders menu
 */

const menuView = (container) => {
  const template = document.getElementById("menu-template");
  const content = template.content.cloneNode(true);

  // use event delegation 
  const allBtn = content.querySelector('button[data-menu="all"]');
  const activeBtn = content.querySelector('button[data-menu="active"]');
  const completeBtn = content.querySelector('button[data-menu="completed"]');

  allBtn.onclick = () => {
    const all = document.querySelectorAll(".hidden");

    activeBtn.classList.remove("btn-active");
    completeBtn.classList.remove("btn-active");

    all.forEach((element) => {
      element.classList.remove("hidden");
    });
  };

  activeBtn.onclick = () => {
    const active = document.querySelectorAll(".active");
    const completed = document.querySelectorAll(".task-complete");

    activeBtn.classList.add("btn-active");
    allBtn.classList.remove("btn-active");
    completeBtn.classList.remove("btn-active");

    active.forEach((element) => {
      element.classList.remove("hidden");
    });

    completed.forEach((element) => {
      element.classList.add("hidden");
    });
  };

  completeBtn.onclick = () => {
    const active = document.querySelectorAll(".active");
    const completed = document.querySelectorAll(".task-complete");

    completeBtn.classList.add("btn-active");
    allBtn.classList.remove("btn-active");
    activeBtn.classList.remove("btn-active");

    active.forEach((element) => {
      element.classList.add("hidden");
    });

    completed.forEach((element) => {
      element.classList.remove("hidden");
    });
  };

  container.append(content);
};

export default menuView;
