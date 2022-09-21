function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let newValue = 0;

inputEl.addEventListener("input", onChangeValue);
btnCreate.addEventListener("click", () => createBoxes(newValue));
btnDestroy.addEventListener("click", destroyBoxes);

function onChangeValue() {
  newValue = Number(inputEl.value);
}

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();

    newBoxes.push(div);
  }

  boxesEl.append(...newBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
