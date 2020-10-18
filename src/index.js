import "./mystyles.scss";

const todos = [];

const addProjectBtn = document.getElementById("add-project");
addProjectBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("is-active");
});