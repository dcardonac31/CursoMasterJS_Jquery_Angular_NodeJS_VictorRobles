'use strict'

/*
Muestre todos los numeros divisores de un numero introduce en prompt
*/

do{
  var numero = parseInt(prompt("Introduce un numero: "))
}while(isNaN(numero))

for (let i = 0; i <= numero; i++) {
  if(numero % i == 0)
    console.log(i + " es divisor de " + numero)
}