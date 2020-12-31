'use strict'

//Insertar texto en un prompt para almacenarlo en una variable, mostrarlo en el document con una plantilla
//Luego hacer funciones de busqueda y reemplazo

var texto = prompt("Ingresa texto: ");

var textoPlantilla = `
  <h1>Texto Ingresado</h1>
  <h4>${texto}</h4>
`;
document.write(textoPlantilla);


var busqueda = prompt("Ingresa texto a buscar: ");

var busqueda2 = texto.match(busqueda);

console.log(busqueda2);


