'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles";
var texto2 = "es muy buen curso";
var texto3 = " Bienvenido al curso de JavaScript curso de Victor Robles ";

// var busqueda = texto1.indexOf("curso");
// var busqueda = texto1.search("curso");
// var busqueda = texto1.match("curso");
// var busqueda = texto1.match(/curso/g); //Buscar varios elementos
// var busqueda = texto1.substr(14,5); //extraer caracteres de una posicion a otra
// var busqueda = texto1.charAt(14); //extraer posicion en concreto
// var busqueda = texto1.startsWith("Bi"); //Buscar si el texto comienza con caracter o texto especifico
// var busqueda = texto1.endsWith("es"); //Buscar si el texto comienza con caracter o texto especifico
// var busqueda = texto1.includes("JavasCript"); //Buscar texto exacto
// var busqueda = texto1.replace("JavaScript", "Symfony"); //Reemplazar texto
// var busqueda = texto1.slice(14,22); //cortar texto en una posicion
// var busqueda = texto1.split(" "); //separar el texto por determinado caracter y llevarlo a un array
var busqueda = texto3.trim(); //quita espacios al comienzo y final
console.log(busqueda);