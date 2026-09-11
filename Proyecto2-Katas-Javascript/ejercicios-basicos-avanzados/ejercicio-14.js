// Este archivo contiene la lógica de ejercicio-14. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const words = [
 'code',
 'repeat',
 'eat',
 'sleep',
 'code',
 'enjoy',
 'sleep',
 'code',
 'enjoy',
 'sleep',
 'code'
];

function repeatCounter(list) {
  const result = {};

  for (const word of list) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

console.log(repeatCounter(words));