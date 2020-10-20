export default (() => {
  const closeModal = modalId => document.getElementById(modalId).classList.remove("is-active");
  const openModal = modalId => document.getElementById(modalId).classList.add("is-active");

  const newTaskBtn = document.getElementById('new-task-btn');
  const newProjectBtn = document.getElementById('new-project-btn');

  return {
    //add click events listeners
    addEvents: () => {
      newProjectBtn.addEventListener("click", () => openModal("project-modal"));
      newTaskBtn.addEventListener("click", () => openModal("task-modal"));
      
      //add listeners to cancel button of each modal
      Array.from(document.querySelectorAll("a#modal-close")).forEach(node => {
        const modal = node.parentNode.parentNode.parentNode.parentNode.parentNode;
        node.addEventListener("click", () => closeModal(modal.id));
      })
    }
  };
})();