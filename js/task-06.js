const inputEl = document.querySelector("#validation-input");
const valueValidation = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputEl.value.trim().length === valueValidation) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
