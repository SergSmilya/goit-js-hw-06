const refs = {
  inputEl: document.querySelector("#validation-input"),
};

refs.inputEl.style.outline = "none";

refs.inputEl.addEventListener("input", onValue);
refs.inputEl.addEventListener("blur", onValidColorBorder);
refs.inputEl.addEventListener("focus", removeClass);

function onValue() {
  console.log(event.currentTarget.value);
}

function onValidColorBorder() {
  if (
    event.currentTarget.value.length === Number(refs.inputEl.dataset.length)
  ) {
    refs.inputEl.classList.add("valid");
  } else if (
    event.currentTarget.value.length >
    Number(
      refs.inputEl.dataset.length &&
        event.currentTarget.value.length < Number(refs.inputEl.dataset.length)
    )
  ) {
    refs.inputEl.classList.add("invalid");
  } else {
    refs.inputEl.classList.add("validation-input");
  }
}

function removeClass() {
  refs.inputEl.classList.remove("valid");
  refs.inputEl.classList.remove("invalid");
}
