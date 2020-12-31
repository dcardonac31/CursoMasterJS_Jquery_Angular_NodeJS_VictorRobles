'use strict'

//Arrays, Arreglos, Matrices

var nombre = "David Cardona";
var nombres = ["David Cardona", "Juan Lopez", "Manolo Garcia", 52, true]

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "RPGLE");

console.log(nombres[2]);
console.log(lenguajes[3]);

console.log(nombres.length);

// var elemento = parseInt(prompt("¿Que elemento del array quieres?",0));
// if(elemento >= nombres.length){
//   alert("Introduce numero menor que: "+ nombres.length);
// }else{
//   alert("Valor elemento: "+nombres[elemento])
// }

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
// for (let i = 0; i < lenguajes.length; i++) {
//   document.write("<li>"+lenguajes[i]+"</li>");
//   document.write("</br>");
// }
lenguajes.forEach((elemento, indice)=>{
  document.write("<li>"+indice+"-"+elemento+"</li>");
})
document.write("</ul>");