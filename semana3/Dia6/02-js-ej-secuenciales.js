/**
 * 1. Algoritmo para sumar 4 notas
 * e imprimir el promedio de los 4
 */

let c1 = 0, c2 = 0, c3 = 0, c4 = 0, promedio, suma = 0;

/**
 * typeof [variable ] => devuelve en string con el tipo de dato 
 * de un elemento
 */
console.log(typeof c1);
/**
 * OJO: anteponer el simbolo "+" a una instruccion o variable la
 * convierte automaticamente en un NUMERO
 */
c1 = +prompt("Ingresar la primera nota");
c2 = +prompt("Ingresar la segunda nota");
c3 = +prompt("Ingresar la tercera nota");
c4 = +prompt("Ingresar la cuarta nota");


//como mostrar el tipo de dato de una variable?//
console.log(typeof c1);

suma = c1 + c2 + c3 + c4;
promedio = suma / 4 ;
/**
 * El uso de backticks (`) nos ayudan a concatenar
 * variables con strings en una sola linea sin el uso del operador (+) 
 */

console.log(`El promedio es: ${promedio}`);

