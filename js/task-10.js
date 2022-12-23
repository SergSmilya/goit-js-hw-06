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
  // !Бідьш вірніший варіант
  const divElements = [];
  let width = 20;
  let height = 20;
  for (let i = 0; i < amountValue; i += 1) {
    width += 10;
    height += 10;

    const el = `<div style="background-color:${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`;

    divElements.push(el);
  }
  addBoxes(divElements);

  // ? Не вірно працюючий варіант
  // for (let i = 1; i <= amountValue; i += 1) {
  //   const el = document.createElement("div");
  //   el.style.backgroundColor = getRandomHexColor();
  //   ???? el.style.width = 300;
  //   ???? el.style.height = 200;

  //   divElements.push(el);
  // }

  // console.log(...divElements);
  // refs.newElinDivBoxes.append(...divElements);
}

function addBoxes(divElements) {
  refs.newElinDivBoxes.insertAdjacentHTML("beforeend", divElements.join(""));
}

function destroyBoxes() {
  refs.newElinDivBoxes.innerHTML = "";
  refs.divEl.firstElementChild.value = "";
}
