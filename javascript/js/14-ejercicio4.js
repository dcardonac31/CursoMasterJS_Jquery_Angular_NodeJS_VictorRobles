'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/
var numero1 = 0
var numero2 = 0

do{
  do{
    numero1 = parseInt(prompt("Ingrese numero 1: ",0));
  }while(isNaN(numero1))
  do{
    numero2 = parseInt(prompt("Ingrese numero 2: ",0));
  }while(isNaN(numero2))
}while(numero1 > numero2)

document.write("<h3>De: "+ numero1 + " a " + numero2 + " están estos numeros impares:</h3>")
for (let i = numero1; i <= numero2; i++) {
  if(i % 2 != 0){
    console.log(i);
    document.write(i+"<br/>");
  }
}