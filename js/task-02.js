const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeElementList = () => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = ingredient;
    console.log(liEl);
    return liEl;
  });
};

const element = makeElementList(ingredients);

const ulEl = document.querySelector("#ingredients");
ulEl.append(...element);
