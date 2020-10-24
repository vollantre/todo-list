export default (() => {
  const active = "is-active";
  const projectList = document.getElementById("project-list");

  //forms
  const projectForm = document.forms[0];
  const taskForm = document.forms[1];

  const deactivateElement = id => document.getElementById(id).classList.remove(active);
  const activateElement = id => document.getElementById(id).classList.add(active);

  function renderProjectTasks(project) {
    document.getElementById("project-title").innerText = project.name;
  }

  function getFormData(formEl) {
    const formData = {};
    Array.from(formEl.elements).forEach(el => formData[el.name] = el.value);
    return formData;
  }

  function createProject(project) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = project.name;
    a.id = project.id;

    a.addEventListener("click", () => {
      this.selectProject(project);
    });

    li.appendChild(a);
    return li;
  };

  function addListenersToModals() {
    document.getElementById('new-project-btn').addEventListener("click", () => activateElement("project-modal"));
    document.getElementById('new-task-btn').addEventListener("click", () => activateElement("task-modal"));

    document.querySelectorAll("button#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => {
        modal.querySelector("form").reset();
        deactivateElement(modal.id);
      });
    });
  };

  return {
    handlers: {},

    addEventHandlers() {
      addListenersToModals.call(this);
      projectForm.addEventListener("submit", e => {
        e.preventDefault();
        const formEl = e.target;
        const formData = getFormData(formEl);

        this.handlers.projectOnSave(formData);

        formEl.reset();
        deactivateElement("project-modal");
      });
    },

    addProject(project) {
      const newProject = createProject.call(this, project);
      projectList.appendChild(newProject);
      this.selectProject(project);
    },

    addProjects(projects) {
      projects.forEach(this.addProject.bind(this));
    },

    selectProject(project) {
      this.handlers.projectOnSelect(project);
      document.querySelector("#project-list>li>.is-active")?.classList.remove(active);
      activateElement(project.id);
      renderProjectTasks(project);
    }
  };
})();