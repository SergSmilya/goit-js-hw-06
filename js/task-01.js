const liTotalEl = categories.querySelectorAll(".item");
console.log(`Number of categories: ${liTotalEl.length}`);
//
liTotalEl.forEach((elementLi) => {
  console.log(`Category: ${elementLi.querySelector("h2").textContent}`);
  console.log(`Elements: ${elementLi.querySelectorAll("li").length}`);
});
