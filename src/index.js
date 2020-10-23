import "./mystyles.scss";
import DOMHelper from "./DOMHelper";

const projects = [{
  id: "0",
  name: "Default project",
  taskList: []
},
{
  id: "1",
  name: "Default project",
  taskList: []
},
{
  id: "2",
  name: "Default project",
  taskList: []
},
{
  id: "3",
  name: "Default project",
  taskList: []
}];

DOMHelper.renderInitialProjects(projects);
DOMHelper.addEventListeners();
