'use strict'

// Funciones anonimas
//Es una función que no tiene nombre

// var pelicula = function(nombre){
//   return "La pelicula es: "+ nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  console.log(sumar);
  return sumar;

}

// sumame(5,7, function(dato){
//   console.log("La suma es: ", dato)
// },
// function(dato){
//   console.log("La sumna por dos es:", (dato*2));
// });

//Funciones flecha

sumame(5,7, dato =>{
  console.log("La suma es: ", dato)
},
dato =>{
  console.log("La sumna por dos es:", (dato*2));
});