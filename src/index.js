import "./mystyles.scss";
import DOMHelper from "./DOMHelper";
import Project from "./Project";

let currentProject = null;
const initialProjects = [new Project("Default project")]; 
const projects = initialProjects;

const handlers = {
  projectOnSave: data => {
    const project = new Project(data.name);

    projects.push(project);

    DOMHelper.addProject(project);
  },
  projectOnSelect: project => currentProject = project
};

DOMHelper.handlers = handlers;
DOMHelper.addProjects(projects);
DOMHelper.selectProject(projects[0]);

DOMHelper.applyEventHandlers();