'use strict'

//Funciones
//Una función es un agrupación reutilizable de un conjunto de instrucciones

//Defino la función
function calculadora(num1, num2){
  //conjunto de instrucciones
  console.log("Suma:  " + (num1+num2));
  console.log("Resta:  " + (num1-num2));
  console.log("Multiplicación:  " + (num1*num2));
  console.log("División:  " + (num1/num2));
  console.log("----------------------------");
}



for (let i = 1; i <= 10; i++) {
  calculadora(i,8);
  
}