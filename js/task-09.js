function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}
