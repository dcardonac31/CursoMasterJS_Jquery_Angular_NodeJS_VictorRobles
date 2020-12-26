'use strict'

//Funciones
//Una función es un agrupación reutilizable de un conjunto de instrucciones

//Defino la función

function porConsola(num1, num2){
  console.log("Suma:  " + (num1+num2));
  console.log("Resta:  " + (num1-num2));
  console.log("Multiplicación:  " + (num1*num2));
  console.log("División:  " + (num1/num2));
  console.log("----------------------------");
}

function porPantalla(num1, num2){
  document.write("Suma:  " + (num1+num2)+"<br/>");
  document.write("Resta:  " + (num1-num2)+"<br/>");
  document.write("Multiplicación:  " + (num1*num2)+"<br/>");
  document.write("División:  " + (num1/num2)+"<br/>");
  document.write("----------------------------");
}




function calculadora(num1, num2, mostrar = false){
  //conjunto de instrucciones
  if(mostrar == false){
    porConsola(num1,num2)
  }else{
    porPantalla(num1,num2)
  }

}



// for (let i = 1; i <= 10; i++) {
//   calculadora(i,8);
  
// }

calculadora(9,5);
calculadora(10,18,true);
