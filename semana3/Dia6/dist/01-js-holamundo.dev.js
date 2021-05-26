"use strict";

console.log("Hola mundo"); // VARIABLES

/**
 * 1. Una variable se crea sólo una vez.
 */
// TIPO DE DATO cadena de texto (STRING)

var nombre = "Jorge Luis";
var apellido = "Garnica Blanco";
nombre = "Jorge";
console.log(nombre); // TIPO DE DATO NUMERICO (number)

var edad = 29;
var sueldo = 950.20;
sueldo = 980.00;
sueldo = sueldo + 20; // concatenar 

console.log("Sueldo: " + sueldo); // TIPO DE DATO BOOLEAN (verdadero o falso)

var soltero = true;
var papeletas = false;
console.log("Soltero?: " + soltero); // TIPO DE DATO ARRAY

var meses = ["January", "February", "March", "April"];
console.log(meses); // imrpimir alguna posicion de los arreglos?

console.log(meses[2]);
/*
  Operaciones matemáticas son iguales que en excel por ejemplo
  +, -, *, /
  % => (módulo) es una operación que retorna 
        el residuo de una división entera
 */

var modulo = 55 % 6;
console.log("55 % 6 = " + modulo); // Operaciones simplificadas

var likes = 2; // incrementar automáticamente en una unidad a la variable likes

likes++;
console.log(likes); // incrementar en una unidad a la variable likes

likes = likes + 1;
console.log(likes); // incrementar en una unidad a la variable likes

likes += 1;
console.log(likes);