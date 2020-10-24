export default (() => {
  const active = "is-active";
  const projectList = document.getElementById("project-list");

  const createProject = project => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = project.name;

    a.addEventListener("click", () => {
      document.querySelector("#project-list>li>.is-active")?.classList.remove(active);
      a.classList.add(active);
    });

    li.id = project.id;
    li.appendChild(a);
    return li;
  };

  function addListenersToModals() {
    document.getElementById('new-project-btn').addEventListener("click", () => this.openModal("project-modal"));
    document.getElementById('new-task-btn').addEventListener("click", () => this.openModal("task-modal"));

    document.querySelectorAll("a#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => this.closeModal(modal.id));
    });
  };

  return {
    projectForm: document.forms[0],
    taskForm: document.forms[1],

    addEventHandlers({ projectOnSave }) {
      addListenersToModals.call(this);
      document.getElementById("save-project-btn").addEventListener("click", projectOnSave.bind(this));
    },
    addProject(project) {
      const newProject = createProject(project);
      projectList.appendChild(newProject);
    },
    closeModal(modalId) {
      document.getElementById(modalId).classList.remove(active);
    },
    openModal(modalId) {
      document.getElementById(modalId).classList.add(active);
    },
    getFormData(formEl) {
      const formData = {};
      Array.from(formEl.elements).forEach(el => formData[el.name] = el.value);
      return formData;
    },
    renderInitialProjects(projects) {
      projects.forEach(this.addProject);
      projectList.firstChild.firstChild.classList.add(active);
    }
  };
})();