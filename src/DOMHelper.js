export default (() => {
  const closeModal = modalId => document.getElementById(modalId).classList.remove("is-active");
  const openModal = modalId => document.getElementById(modalId).classList.add("is-active");

  return {
    //add click events listeners
    addEvents: () => {
      const newProjectBtn = document.getElementById('new-project-btn');
      const newTaskBtn = document.getElementById('new-task-btn');

      newProjectBtn.addEventListener("click", () => openModal("project-modal"));
      newTaskBtn.addEventListener("click", () => openModal("task-modal"));

      const modals = document.querySelectorAll("a#modal-close");

      modals.forEach(node => {
        const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
        node.addEventListener("click", () => closeModal(modal.id));
      });


      //const projectList = document.querySelectorAll("#project-list>li");
//
      //projectList.forEach(node => {
      //  node.firstChild(a => a.addEventListener)
      //});
    },

    renderProject: project => {

    },

    addProjects: projects => {
      const projectList = document.getElementById("project-list");

      projects.forEach(project => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.innerText = project.name;

        li.id = `project-${project.id}`;
        li.appendChild(a);
        projectList.appendChild(li);
      });
    }
  };
})();