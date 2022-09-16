let counterValue = 0;

const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");

const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.textContent = "Reset";
resetBtn.style.marginTop = "15px";
resetBtn.setAttribute("data-action", "reset");
counter.after(resetBtn);

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
resetBtn.addEventListener("click", onResetBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function onResetBtnClick() {
  counterValue = 0;
  valueEl.textContent = counterValue;
}
