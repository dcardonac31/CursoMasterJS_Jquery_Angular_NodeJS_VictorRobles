'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

do{
  var numero = parseInt(prompt("Introduce un numero: ",0));
}while(isNaN(numero) || numero <= 0)

document.write("<h1>Tabla del "+ numero +"</h1>")
for (let i = 1; i <= 10; i++) {
  let multiplicar = numero * i
  document.write(numero + " x " + i +  " = " + multiplicar + "</br>")
}

//Todas las tablas de multiplicar

for(let j = 1;j <= 10; j++)
{
  document.write("<h1>Tabla del "+ j +"</h1>")
  for (let i = 1; i <= 10; i++) {
    let multiplicar = j * i
    document.write(j + " x " + i +  " = " + multiplicar + "</br>")
  }
}

