'use strict'

/*
Hace un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Ingrese numero 1: ",0));
var numero2 = parseInt(prompt("Ingrese numero 2: ",0));

document.write("<h3>De: "+ numero1 + " a " + numero2 + " están estos numeros:</h3>")
for (let i = numero1; i <= numero2; i++) {
  console.log(i);
  document.write(i+"<br/>");
}