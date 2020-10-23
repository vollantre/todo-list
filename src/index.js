import "./mystyles.scss";
import DOMHelper from "./DOMHelper";

const projects = [{
  id: "0",
  name: "Default project",
  taskList: [
    {
      title: "sample task",
      description: "sdadaffa",
    }
  ]
}];

DOMHelper.renderInitialProjects(projects);
DOMHelper.addEventListeners();
