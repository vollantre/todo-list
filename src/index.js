import "./mystyles.scss";
import DOMHelper from "./DOMHelper";

const projects = [{
  id: "0",
  name: "Default project",
  todoList: []
}];

DOMHelper.addEvents();
DOMHelper.addProjects(projects);