const refs = {
  onButtonDecrement: document.querySelector("[data-action=decrement]"),
  onButtonIncrement: document.querySelector("[data-action=increment]"),
  onValue: document.querySelector("#value"),
};

let counterValue = 0;

refs.onButtonDecrement.addEventListener("click", () => {
  return (refs.onValue.textContent = counterValue -= 1);
});

refs.onButtonIncrement.addEventListener("click", () => {
  return (refs.onValue.textContent = counterValue += 1);
});
