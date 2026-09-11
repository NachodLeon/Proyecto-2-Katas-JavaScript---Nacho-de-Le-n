// Este archivo contiene la lógica de ejercicio-09. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for (const number of numberList) {
    sum += number;
  }
  return sum;
}

console.log(sumNumbers(numbers));