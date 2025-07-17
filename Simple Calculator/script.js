const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calc-btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.innerText;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
});
