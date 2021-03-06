export default (() => {
  const active = "is-active";

  const deactivateElement = el => el.classList.remove(active);
  const activateElement = el => el.classList.add(active);

  const projectList = document.getElementById("project-list");


  //forms
  const projectForm = document.forms[0];
  const taskForm = document.forms[1];

  const getFormData = (formEl) => {
    const formData = {};
    Array.from(formEl.elements).forEach(el => formData[el.name] = el.value);
    return formData;
  }

  const formOnSubmit = onSave => e => {
    e.preventDefault();

    const formEl = e.target;
    const formData = getFormData(formEl);

    onSave(formData);

    formEl.reset();
    deactivateElement(formEl.parentNode.parentNode);
  };


  const createProject = (project, onSelect) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = project.name;
    a.id = project.id;

    a.addEventListener("click", onSelect);

    li.appendChild(a);
    return li;
  };

  const renderProjectTasks = project => document.getElementById("project-title").innerText = project.name;


  const addListenersToModals = () => {
    document.getElementById('new-project-btn').addEventListener("click", () => activateElement(document.getElementById("project-modal")));
    document.getElementById('new-task-btn').addEventListener("click", () => activateElement(document.getElementById("task-modal")));

    document.querySelectorAll("button#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => {
        modal.querySelector("form").reset();
        deactivateElement(modal);
      });
    });
  };

  
  return {
    
    projects: [],
    handlers: {},

    applyEventHandlers() {
      addListenersToModals();
      projectForm.addEventListener("submit", formOnSubmit(this.handlers.projectOnSave));
    },

    addProject(project) {
      const onSelect = () => this.selectProject(project.id);
      const newProject = createProject(project, onSelect);
      projectList.appendChild(newProject);
      onSelect();
    },

    addProjects(projects) {
      this.projects = projects;
      projects.forEach(this.addProject.bind(this));
    },

    selectProject(projId) {
      document.querySelector("#project-list>li>.is-active")?.classList.remove(active);

      this.handlers.projectOnSelect(projId);

      activateElement(document.getElementById(projId));
      renderProjectTasks(this.projects.find(p => p.id === projId));
    }
  };
})();