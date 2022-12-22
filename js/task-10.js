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

let amountValue = 0;

const divElements = [];

function onInputValue(e) {
  amountValue = e.target.valueAsNumber;
}

function onCreatElement() {
  createBoxes(amountValue);
}

function onDestroyElement() {
  destroyBoxes();
}

function createBoxes(amountValue) {
  // for (let i = 1; i <= amountValue; i += 1) {
  //   const el = document.createElement("div");
  //   el.style.backgroundColor = getRandomHexColor();
  //   el.style.width = 300;
  //   el.style.height = 200;

  //   divElements.push(el);
  // }

  // console.log(...divElements);
  // refs.newElinDivBoxes.append(...divElements);

  // for (let i = 0; i < amountValue; i += 1) {
  //   const el = `<div style="background-color:${getRandomHexColor()}; width: 30px; height: 30px;"></div>`;

  //   divElements.push(el);
  // }

  // refs.newElinDivBoxes.insertAdjacentHTML("beforeend", divElements.join(""));

  for (let i = 0; i < amountValue; i += 1) {
    refs.newElinDivBoxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color:${getRandomHexColor()}; width: 30px; height: 30px;"></div>`
    );
  }
}
function destroyBoxes() {
  refs.newElinDivBoxes.innerHTML = "";
  refs.divEl.firstElementChild.value = "";
}
