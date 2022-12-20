const refs = {
  formEl: document.querySelector(".login-form"),
};

refs.formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Заповни усі поля!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    refs.formEl.reset();
  }
}
