const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", changeSizeText);

function changeSizeText() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
