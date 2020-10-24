import "./mystyles.scss";
import DOMHelper from "./DOMHelper";
import Project from "./Project";

let currentProject = null;

const projects = [new Project("Default project")];

DOMHelper.renderInitialProjects(projects);
DOMHelper.addEventHandlers({ projectOnSave: () => {
  const form = DOMHelper.projectForm;
  const { name } = DOMHelper.getFormData(form);

  const project = new Project(name);

  projects.push(project);
  DOMHelper.addProject(project);

  //reset and close form
  form.reset();
  DOMHelper.closeModal("project-modal");
}});