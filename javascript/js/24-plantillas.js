'use strict'

var nombre = prompt("Nombre: ");
var apellidos = prompt("Apellidos: ");

//var nombreCompleto = "Mi nombre es: "+ nombre + "<br/> Mis apellidos son: "+apellidos; //!!!ESTO ES IMPRODUCTIVO¡¡¡¡
var nombreCompleto = `
  <h1>Hola que tal</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(nombreCompleto);