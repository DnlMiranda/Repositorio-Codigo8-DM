//Ejercicio 2.12   -DONE-

// let articulo = "pantalon";
// let pantalon = 100;
// let descuento = 0;
// let dscto = 0.20;
// let iva = 0.15;
// let final = 0;

// articulo = +prompt("Que articulo desea llevar? ")
// descuento = pantalon - (pantalon * 0.20);
// iva = descuento + (descuento * 0.15);

// console.log(`El precio con descuento es : ${descuento} soles, El precio final es de : ${iva} soles`);

//--------------------------------------------------------------------------------------------

// Ejercicio 2.13 -DONE-
// Cuanto ahorra una persona en un año, si ahorra el 15% de su sueldo cada semana

// let ahorro = 0.15;
// let sueldo = 0;
// let tiempo = 12;
// let semana = 4;
// let calculo = 0;
// let total = 0;

// sueldo = +prompt("¿De cuanto es tu sueldo mensual?")

// calculo =  (sueldo * ahorro) * semana;
// total = calculo * tiempo;


// console.log(`En un año ahorras: ${total} soles`);

//--------------------------------------------------------------------------------------------

//Ejercicio 2.14 

// let hotel = 100;
// let comida = 90;
// let extras = 100;
// let dias = 0;
// let cheque = 0;

// dias = +prompt("¿Cuantos días estará de viaje?");
// cheque = (hotel + comida + extras) * dias
// hotel = hotel * dias;
// comida = comida * dias;
// extras = extras * dias;
// console.log(`El monto del cheque total es de : ${cheque} pesos por ${dias}dias | Gastos de hotel: ${hotel} pesos, <br>
// Gastos de comida : ${comida}pesos,<br> Gastos extras: ${extras} pesos `); 


// Ejercicio 2.19
// Area de un cuadrado

// let b = 0;
// let h = 0;
// let a = 0;

// b = +prompt("Base del cuadrado")
// h = +prompt("Altura del cuadrado")

// a = b * h
// console.log(`El area del cuadrado es ${a}`);

//------------------------------

// Ejercicio 2.20
// Sacar promedio final de 3 notas, teniendo en cuenta que la 1era y 2da nota vale 25%
// y la tercera nota vale 50%


// let n1 = 0, n2 = 0, n3 = 0;
// let promedio = 0;
// let resultado = 0;

// n1 = +prompt("Ingrese la primera nota");
// n2 = +prompt("Ingrese la segunda nota");
// n3 = +prompt("Ingrese la tercera nota");

// promedio = (n1 + n2) + (n3 * 2)
// resultado = promedio / 4

// console.log(`Promedio final: ${resultado}`);

//---------------------------------------------------------------------------

//Ejercicio 2.21
// Determinar cuantos meses/semanas/dias/horas ha vivido una persona segun su edad

// let meses = 12, semanas = 4,  dias = 365, horas = 24;
// let edad = 0;

// edad = +prompt("¿Cual es su edad?");
// meses = edad * meses;
// semanas =  edad * (semanas * meses); 
// dias = edad * dias;
// horas = edad * (horas * dias);  

// console.log(`Has vivido : ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas`);


// ----------------------------------------------------------------------------------

//Ejercicio 2.22
// Profe este ejercicio es el mismo al del ejercicio "2.9"

//-------------------------------------------------------------------------------------

// Ejercicio 2.23
//Determinar el costo por huesped segun los dias que se va a hospedar

// let dias = 0;
// let cobrar = 0;
// let habitacion = 150;

// dias = +prompt("¿Cuantos dias piensa hospedarse")
// cobrar = dias * habitacion;
// console.log(`El costo total de su estancia por ${dias}dias es de ${cobrar}dólares`);