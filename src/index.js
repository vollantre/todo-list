import "./mystyles.scss";

const projects = [];

const modal = document.querySelector(".modal");

const addProjectBtn = document.getElementById("add-project");
addProjectBtn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

const closeModal = () => modal.classList.remove("is-active");

document.getElementById("modal-close").addEventListener("click", closeModal);