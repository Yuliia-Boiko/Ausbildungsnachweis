const addButton = document
  .getElementById("add-button")
  .addEventListener("click", createInput());

function createInput() {
  console.log("hallo");
  document.getElementById("section").createElement("input");
};
