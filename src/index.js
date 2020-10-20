import "./mystyles.scss";

const projects = [];

const modal = document.querySelector(".modal");

const addProjectBtn = document.getElementById("add-project");
addProjectBtn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

const closeModal = () => modal.classList.remove("is-active");

document.querySelector(".modal-background").addEventListener("click", closeModal);
document.querySelector(".modal-close").addEventListener("click", closeModal);