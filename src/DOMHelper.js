export default (() => {
  const active = "is-active";
  const closeModal = modalId => document.getElementById(modalId).classList.remove(active);
  const openModal = modalId => document.getElementById(modalId).classList.add(active);

  const addListenersToModals = () => {
    document.getElementById('new-project-btn').addEventListener("click", () => openModal("project-modal"));
    document.getElementById('new-task-btn').addEventListener("click", () => openModal("task-modal"));

    document.querySelectorAll("a#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => closeModal(modal.id));
    });
  };

  const addListenerToProjectList = () => {
    const projectList = document.querySelectorAll("#project-list>li>a");

    projectList.forEach(a => {
      a.addEventListener("click", () => {
        document.querySelector("#project-list>li>.is-active")?.classList.remove(active);
        a.classList.add(active);
      });
    });
  };

  return {
    //add click events listeners
    addEventListeners() {
      addListenersToModals();
      addListenerToProjectList();
    },
    addProject(project) {
      const projectList = document.getElementById("project-list");

      const li = document.createElement("li");
      const a = document.createElement("a");

      a.innerText = project.name;

      li.id = `project-${project.id}`;
      li.appendChild(a);
      projectList.appendChild(li);
    },
    renderInitialProjects(projects) {
      projects.forEach(this.addProject);
    },
    addTask(task) {
      
    },
  };
})();