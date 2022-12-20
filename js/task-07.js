const refs = {
  inputEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", changeFontSizeSpan);

function changeFontSizeSpan() {
  refs.spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
