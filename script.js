const openBtn = document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
