// Este archivo contiene la lógica de ejercicio-33. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
    if (capitals[country]) {
        return capitals[country];
    } else {
        return "País no encontrado en la base de datos.";
    }
}

getCapital("Spain");