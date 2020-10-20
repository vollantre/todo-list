import "./mystyles.scss";

const projects = [{
  id: "0",
  name: "Default project",
  todoList: []
}];

const modal = document.querySelector(".modal");

const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

const closeModal = () => modal.classList.remove("is-active");

document.getElementById("modal-close").addEventListener("click", closeModal);