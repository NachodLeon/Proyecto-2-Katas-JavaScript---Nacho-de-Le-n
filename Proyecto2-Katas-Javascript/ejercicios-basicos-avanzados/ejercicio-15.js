// Este archivo contiene la lógica de ejercicio-15. El código organiza las operaciones y resuelve las tareas correspondientes a este ejercicio.

const products = [
 "Camiseta de Metallica",
 "Pantalón vaquero",
 "Gorra de beisbol",
 "Camiseta de Basket",
 "Cinturón de Orión",
 "AC/DC Camiseta",
];

for (const product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}