const display = document.getElementById('display');

function appendNumber(num) {
  if (display.value === '0' || display.value === 'Erro') {
    display.value = num;
  } else {
    display.value += num;
  }
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '0';
}

function deleteLast() {
  if (display.value.length === 1 || display.value === 'Erro') {
    display.value = '0';
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  try {
    // Avalia a expressão matemática digitada no visor
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}
