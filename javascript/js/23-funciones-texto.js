'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString(); // numero a texto
    dato = texto1.toUpperCase() // mayusculas
    dato = texto2.toLowerCase() // minusculas



console.log(dato);

// Calcular longitud texto
var nombre = "David";
// console.log(nombre.length);
nombre = ["David", "Cardona"]
// console.log(nombre.length);

//Concatenar - Unir textos

//var textoTotal = texto1+" "+texto2;

var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);