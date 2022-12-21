function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divEl: document.querySelector("#controls"),
  createButtonEl: document.querySelector("[data-create]"),
  destroyButtonEl: document.querySelector("[data-destroy]"),
  newElinDivBoxes: document.querySelector("#boxes"),
};

refs.divEl.addEventListener("input", onInputValue);
refs.createButtonEl.addEventListener("click", onCreatElement);
refs.destroyButtonEl.addEventListener("click", onDestroyElement);

function onInputValue(e) {
  return (amount = +e.target.value);
}
function onCreatElement() {
  createBoxes();
}

function onDestroyElement(e) {
  destroyBoxes();
}

function createBoxes() {
  refs.newElinDivBoxes.insertAdjacentHTML(
    "afterend",
    `<div backgroundColor=${getRandomHexColor}>jhjhjh</div>`
  );
}

function destroyBoxes() {
  refs.newElinDivBoxes.remove();
}
