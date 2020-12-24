'use strict'

/*
Calculadora:
-Pida dos numeros por pantalla
-validación de numeros
-resultado en alerta, consola y body de (+ - * /)
*/


do{
  var numero1 = parseInt(prompt("Ingrese numero 1: ",0));
}while(isNaN(numero1))

do{
  var numero2 = parseInt(prompt("Ingrese numero 2: ",0));
}while(isNaN(numero2))

document.write("<h1>Calculadora</h1>")
document.write(numero1 + " + " + numero2 +  " = " + (numero1 + numero2) + "</br>")
document.write(numero1 + " - " + numero2 +  " = " + (numero1 - numero2) + "</br>")
document.write(numero1 + " * " + numero2 +  " = " + (numero1 * numero2) + "</br>")
document.write(numero1 + " / " + numero2 +  " = " + (numero1 / numero2) + "</br>")

alert(numero1 + " + " + numero2 + " = " + (numero1+numero2))
alert(numero1 + " - " + numero2 + " = " + (numero1-numero2))
alert(numero1 + " * " + numero2 + " = " + (numero1*numero2))
alert(numero1 + " / " + numero2 + " = " + (numero1/numero2))

console.log(numero1 + " + " + numero2 + " = " + (numero1+numero2))
console.log(numero1 + " - " + numero2 + " = " + (numero1-numero2))
console.log(numero1 + " * " + numero2 + " = " + (numero1*numero2))
console.log(numero1 + " / " + numero2 + " = " + (numero1/numero2))
