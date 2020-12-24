'use strict'

/*
Que nos diga si un numero es par o impar.
1. Ventana promt
2. Si no es valido que nos pida de nuevo el numero
*/

do{
  var numero = parseInt(prompt("Introduce un numero: ",0));
}while(isNaN(numero) || numero <= 0)

if(numero % 2 == 0){
  console.log(numero + " es par");
}else{
  console.log(numero + " es impar");
}
