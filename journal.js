const editForm = document.querySelector("#journal-form");
const editButton = document.querySelector("#edit-button");
const textArea = document.querySelector(".form-control-text");

editButton.addEventListener("click", () => {
  textArea.disabled = false;
});

editForm.addEventListener("submit", (event) => {
event.preventDefault();
const data = new FormData(editForm);
const formData = Object.fromEntries(data.entries());
console.log(formData);
textArea.disabled = true;
});