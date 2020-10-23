export default (() => {
  const active = "is-active";
  const projectList = document.getElementById("project-list");

  const closeModal = modalId => document.getElementById(modalId).classList.remove(active);
  const openModal = modalId => document.getElementById(modalId).classList.add(active);

  const getFormData = formEl => {
    const formData = {};
    Array.from(formEl.elements).forEach(el => {
      formData[el.name] = el.value;
    });
    console.log(formData);
  }

  const addListenersToModals = () => {
    document.getElementById('new-project-btn').addEventListener("click", () => openModal("project-modal"));
    document.getElementById('new-task-btn').addEventListener("click", () => openModal("task-modal"));

    document.querySelectorAll("a#modal-close").forEach(node => {
      const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
      node.addEventListener("click", () => closeModal(modal.id));
    });

    document.getElementById("save-project-btn").addEventListener("click", () => getFormData(document.forms[0]));
    document.getElementById("save-task-btn").addEventListener("click", () => getFormData(document.forms[1]));
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

  const createProject = project => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = project.name;

    li.id = `project-${project.id}`;
    li.appendChild(a);
    return li;
  };

  const createTask = task => {

  };

  return {
    addEventListeners() {
      addListenersToModals();
      addListenerToProjectList();
    },
    addProject(project) {
      const newProject = createProject(project);
      projectList.appendChild(newProject);
    },
    renderInitialProjects(projects) {
      projects.forEach(this.addProject);
      projectList.firstChild.firstChild.classList.add(active);
    },
  };
})();