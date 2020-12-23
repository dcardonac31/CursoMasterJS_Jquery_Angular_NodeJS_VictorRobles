//let vs var
//let: permite definir variables limitando su alcance al bloque, declaración o expresión donde se esta usando
//var: define una variable global o local sin importar el ambito del bloque

'use strict'

//prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
  var numero = 50;
  console.log(numero); // valor 50
}

console.log(numero); // valor 50

//prueba con let
var texto = "Curso JS vixtorroblesweb.es";
console.log(texto); //valor js

if(true){
  let texto = "Curo laravel 5 victorroblesweb.js"
  console.log(texto) // valor laravel 5
}

console.log(texto) // valor js