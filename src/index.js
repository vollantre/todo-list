import "./mystyles.scss";
import DOMHelper from "./DOMHelper";
import Project from "./Project";

let currentProject = null;
const initialProjects = [new Project("Default project")]; 
const projects = initialProjects;

const handlers = {
  projectOnSave: (e) => {
    e.preventDefault();
    const form = DOMHelper.projectForm;
    const { name } = DOMHelper.getFormData(form);

    const project = new Project(name);

    projects.push(project);
    DOMHelper.addProject(project);

    //reset and close form
    form.reset();
    DOMHelper.desactiveElement("project-modal");
  },
}

DOMHelper.addProjects(projects);
DOMHelper.handlers = handlers;

DOMHelper.addEventHandlers();

currentProject = projects[0];
DOMHelper.currentProject = currentProject;