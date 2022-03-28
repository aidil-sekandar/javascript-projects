const counter = document.querySelector("#counter");
const increment = document.querySelector("#increment-btn");
const save = document.querySelector("#save-btn");
const decrement = document.querySelector("#decrement-btn");
const reset = document.querySelector("#reset-btn");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decrement.addEventListener("click", () => {
  count--;
  if (count < 0) {
    counter.textContent = "cannot count less than 0";
    count = 0;
  } else {
    counter.textContent = count;
  }
});

save.addEventListener("click", () => {
  counter.textContent = `${count} is saved`;
});

reset.addEventListener("click", () => {
  counter.textContent = "reset";
  count = 0;
});
