'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas]

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = prompt("Introduce tu pelicula: ");

// do{
//   elemento = prompt("Introduce tu pelicula:")
//   peliculas.push(elemento);
// }while(elemento != "ACABAR")

// peliculas.pop();

var indice = peliculas.indexOf("Gran torino")

if(indice > -1){
  peliculas.splice(indice, 1);
}

var peliculasString = peliculas.join();

console.log(peliculasString);



