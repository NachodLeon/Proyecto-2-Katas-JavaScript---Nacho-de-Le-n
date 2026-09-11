// Este archivo contiene la lógica de ejercicio-17. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const alien = {
   name: 'Xenomorph',
   species: 'Xenomorph XX121',
   origin: 'Unknown',
   weight: 180
};


for (const key in alien) {
  console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`);
}