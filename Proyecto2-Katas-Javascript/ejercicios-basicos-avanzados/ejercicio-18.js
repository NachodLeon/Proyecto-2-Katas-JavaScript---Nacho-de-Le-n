// Este archivo contiene la lógica de ejercicio-18. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const placesToTravel = [
 { id: 5, name: "Japan" },
 { id: 11, name: "Venecia" },
 { id: 23, name: "Murcia" },
 { id: 40, name: "Santander" },
 { id: 44, name: "Filipinas" },
 { id: 59, name: "Madagascar" },
];

const filteredPlaces = [];
for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
        filteredPlaces.push(placesToTravel[i]);
    }
}
console.log(filteredPlaces);