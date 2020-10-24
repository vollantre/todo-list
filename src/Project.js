export default class Project {
  constructor(name) {
    this.id = `project-${Project.lastId++}`;
    this.name = name;
    this.taskList = [];
  }

  static lastId = 0;

};