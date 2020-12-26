'use strict'

// Parametros REST y SPREAD

// function listadoFrutas(fruta1, fruta2){
//   console.log("Fruta 1: ", fruta1);
//   console.log("Fruta 2: ", fruta2);
// }

// listadoFrustas("Manzana","Naranja");



function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log(resto_de_frutas);
}

//...resto de frutas : lo que entra a este parametro se guarda en un array

// listadoFrutas("Manzana","Naranja", "Sandia","Pera","Melon", "Coco")


// Fruta 1:  Manzana
// 20-parametros2.js:16 Fruta 2:  Naranja
// 20-parametros2.js:17 (4) ["Sandia", "Pera", "Melon", "Coco"]0: "Sandia"1: "Pera"2: "Melon"3: "Coco"length: 4__proto__: Array(0)

var frutas = ["Manzana","Naranja"]

listadoFrutas(...frutas,"Sandia","Pera","Melon", "Coco")