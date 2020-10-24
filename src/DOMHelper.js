export default (() => {
  const active = "is-active";
  const projectList = document.getElementById("project-list");

  function createProject(project) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = project.name;
    a.id = project.id;

    a.addEventListener("click", (e) => {
      document.querySelector("#project-list>li>.is-active")?.classList.remove(active);
      this.activeElement(a.id);

      this.selectProject(project);
    });

    li.appendChild(a);
    return li;
  };

  function addListenersToModals() {
    document.getElementById('new-project-btn').addEventListener("click", () => this.activeElement("project-modal"));
    document.getElementById('new-task-btn').addEventListener("click", () => this.activeElement("task-modal"));

    document.querySelectorAll("button#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => {
        modal.querySelector("form").reset();
        this.desactiveElement(modal.id);
      });
    });
  };

  return {
    projectForm: document.forms[0],
    taskForm: document.forms[1],
    currentProject: null,
    handlers: {},

    addEventHandlers() {
      addListenersToModals.call(this);
      this.projectForm.addEventListener("submit", this.handlers.projectOnSave);
    },
    addProject(project) {
      const newProject = createProject.call(this, project);
      projectList.appendChild(newProject);
    },
    desactiveElement(id) {
      document.getElementById(id).classList.remove(active);
    },
    activeElement(id) {
      document.getElementById(id).classList.add(active);
    },
    getFormData(formEl) {
      const formData = {};
      Array.from(formEl.elements).forEach(el => formData[el.name] = el.value);
      return formData;
    },
    addProjects(projects) {
      projects.forEach(this.addProject.bind(this));
      this.selectProject(projects[0]);
    },
    renderProjectTasks(project) {
      document.getElementById("project-title").innerText = project.name;
    },
    selectProject(project) {
      this.activeElement(project.id);
      this.renderProjectTasks(project);
    }
  };
})();