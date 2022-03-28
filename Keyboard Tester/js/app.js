const keyPressed = document.querySelector("#key-pressed");
const inputText = document.querySelector("#input-text");

document.addEventListener("keydown", (e) => {
  inputText.focus();
  if (e.code === "Tab") e.preventDefault();

  let currentKey = document.getElementById(`${e.code}`);
  if (currentKey !== null) {
    currentKey.classList.add("current-key");

    keyPressedText(e, currentKey);

    document.addEventListener("keyup", () => {
      currentKey.classList.remove("current-key");
    });
  }
});

const keyPressedText = (e, currentKey) => {
  let currentKeyId = currentKey.getAttribute("id");

  switch (currentKeyId) {
    case "ShiftRight":
      keyPressed.textContent = "Right Shift";
      break;
    case "ShiftLeft":
      keyPressed.textContent = "Left Shift";
      break;
    case "AltRight":
      keyPressed.textContent = "Right Alt";
      break;
    case "AltLeft":
      keyPressed.textContent = "Left Alt";
      break;
    case "ControlRight":
      keyPressed.textContent = "Right Control";
      break;
    case "ControlLeft":
      keyPressed.textContent = "Left Control";
      break;
    case "Tab":
      keyPressed.textContent = "Tab";
      break;
    case "Backspace":
      keyPressed.textContent = "Backspace";
      break;
    case "Enter":
      keyPressed.textContent = "Enter";
      break;
    case "Space":
      keyPressed.textContent = "Space";
      break;
    default:
      keyPressed.textContent = e.key;
  }
};
