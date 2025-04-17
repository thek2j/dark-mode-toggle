const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");
const labelEl = document.querySelector(".label");

inputEl.checked = JSON.parse(localStorage.getItem("boolean")) || false;

updateBody();

inputEl.addEventListener("click", () => {
  updateLocalStorage();
  updateBody();
});

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

function updateLocalStorage() {
  localStorage.setItem("boolean", JSON.stringify(inputEl.checked));
}
