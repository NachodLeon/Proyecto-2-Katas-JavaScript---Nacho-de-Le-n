// Este archivo contiene la lógica de ejercicio-41. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}
console.log(rollDice(6));