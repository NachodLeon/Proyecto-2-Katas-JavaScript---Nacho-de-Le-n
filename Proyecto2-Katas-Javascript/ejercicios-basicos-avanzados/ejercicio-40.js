// Este archivo contiene la lógica de ejercicio-40. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia"));   
console.log(findArrayIndex(mainCharacters, "Rey"));       
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));  
console.log(findArrayIndex(mainCharacters, "Yoda"));     


function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

const characters1 = [...mainCharacters];
console.log(removeItem(characters1, "Han Solo"));

const characters2 = [...mainCharacters];
console.log(removeItem(characters2, "Luke"));

const characters3 = [...mainCharacters];
console.log(removeItem(characters3, "Yoda"));
