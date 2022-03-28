const screen = document.querySelector("#screen");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "÷":
        screen.textContent += "/";
        break;
      case "×":
        screen.textContent += "*";
        break;
      case "AC":
        screen.textContent = "";
        break;
      case "=":
        try {
          screen.textContent = eval(screen.textContent);
        } catch {
          screen.textContent = "Error";
        }
        break;
      case "DEL":
        if (screen.textContent) {
          screen.textContent = screen.textContent.slice(0, -1);
        }
        break;
      default:
        screen.textContent += e.target.textContent;
    }
  });
});
