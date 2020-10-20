export default (() => {
  //add event listeners
  const closeModal = modalId => document.getElementById(modalId).classList.remove("is-active");
  const openModal = modalId => document.getElementById(modalId).classList.add("is-active");

  const newTaskBtn = document.getElementById('new-task-btn');
  const newProjectBtn = document.getElementById('new-project-btn');

  return {
    addEvents() {
      newProjectBtn.addEventListener("click", () => openModal("project-modal"));
      newTaskBtn.addEventListener("click", () => openModal("task-modal"));
      
      //add click listener to cancel button of each modal
      Array.from(document.querySelectorAll("a#modal-close")).map(node => {
        const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
        node.addEventListener("click", () => closeModal(modal.id));
      })
    }
  };
})();