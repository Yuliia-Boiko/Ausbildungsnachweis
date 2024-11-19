const journalForm = document.querySelector("#journal-form");
const editButton = document.querySelector(".glyphicon-pencil");
const textArea = document.querySelector(".form-control-text");

editButton.addEventListener("click", () => {
  textArea.disabled = false;
});

journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(journalForm);
  const data = Object.fromEntries(formData.entries());
  createSection(data);
  journalForm.reset();
});
function createSection(data) {
  const section = document.createElement("div", ".container-md");
  for (const [key, value] of Object.entries(data)) {
    if (!!value) {
      const row = document.createElement("div", ".list-group list-group-flush");
      const label = document.createElement("p", "list-group-item");
      const input = document.createElement("p", "list-group-item");
      label.textContent = key;
      input.textContent = value;
      row.append(label, input);
      section.append(row);
    }
  }
  document.body.append(section);
}

function resetForm() {
  journalForm.reset();
}
