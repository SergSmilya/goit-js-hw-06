function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonEl: document.querySelector(".change-color"),
  nameColorEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener("click", changeBodyColor);

function changeBodyColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.nameColorEl.textContent = getRandomHexColor();
}
