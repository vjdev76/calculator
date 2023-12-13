let display = document.getElementById("display");
let expression = "";

function addToDisplay(value) {
  if (expression === "") {
    expression = value;
  } else {
    expression += value;
  }
  display.value = expression;
}

function clearDisplay() {
  display.value = "";
  expression = "";
}

function calculateResult() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/") {
    addToDisplay(key);
  } else if (key === "enter") {
    event.preventDefault();
    calculateResult();
  } else if (key === "c") {
    clearDisplay();
  }
});

// Agrego este evento para reiniciar la lógica de entrada después de presionar "=" o "Enter"
document.addEventListener("keyup", function (event) {
  const key = event.key.toLowerCase();

  if (key === "=" || key === "enter") {
    expression = display.value;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  
  function toggleBlinkingCursor() {
    display.placeholder = (display.placeholder === "_") ? " " : "_";
  }

  setInterval(toggleBlinkingCursor, 500); 
});