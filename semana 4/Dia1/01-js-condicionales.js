/**
 * Condicionales
 * Ejemplo 3.3 pág. 53
 */

// let unidades = 0;
// let total = 0;
// unidades = +prompt("¿Cuantos productos desea comprar?"); 

// if(unidades >= 1000){
//     console.log(`Precio x producto: 0.85 centavos`);
//     console.log(`Total a pagar: ${unidades * 0.85}`);
//     total = unidades * 0.85;
// } else {
//     console.log(`Precio x producto: 0.90 centavos`);
//     console.log(`Total a pagar: ${unidades * 0.90}`);
//     total = unidades * 0.90;
    
// }

// console.log(`Total a pagar: ${total}`);

// document.write(`Total a pagar: ${total}`)



/**
 * Ejercicio
 */





/**
 * Ejercicio 3.5 pag 58
 * Obtener el mayor de 3 numeros
 */

// let n1 = 32, n2 = 5, n3 = 100;
// let mayor = 0;

// if (n1 > n2){
//     if (n1 > n3){
//         mayor = n1;
//     } else{
//         mayor = n3;
//     }
// } else {
//     if(n2 > n3){
//         mayor = n2;
                
//     } else {
//         mayor = n3
//     }
// }

// document.write(`El mayor es ${mayor}`)

// ----------------------------------------------------

/**
 * Ejercicio 3.6
 * Tipos de Comparadores: 
 * Comparadores ARITMETICOS
 * a>b  mayor 
 * a<b   menor
 * a<=b  menor o igual
 * a>=b   mayor o igual
 * ===  Si a = b, en valor y tipo de dato
 * ==   Si a = b, en valor
 *  a!==b  si a es diferente que b
 * 
 * COMPARADORES LOGICOS
 * a && b (si a y b son verdaderos)
 * a || b ()     - Si uno de los dos es verdadero TODO es VERDADERO, solo es falso si resulta F+F
 * a !== b 
 * 
 * 
 */ 
// let n1 = 99, n2 = 33, n3 = 42, mayor = 0;
    


// if (n1 > n2 && n1 > n3){
//     mayor = n1;
// } else {
//     if (n2 > n3 && n2 > n1){
//         mayor = n2;
//     } else {
//         mayor = n3;
//     }
// }

// document.write(`El mayor de : ${n1} y ${n2} y ${n3} es: ${mayor}`);

/**
 * EJERCICIO RANDOM : Dado el precio del producto, aplicar
 * el 15% dscto en caso sea día "Lunes" ó " Martes"
 */

// let precio = 1000.00;
// let dia = "miercoles";

// if (dia === "lunes" || dia === "martes"){
//     precio = precio * 0.85;
// }

// document.write(`Total a pagar: ${precio}`);

/**
 * Ejercicio 3.6 pág 61
 * 
 */

// let platos = 259;
// let total = 0;

// if (platos < 200){
//     total = platos * 95;
// } else{
//     if(platos <= 300){
//       total = platos * 85;  
//     } else {
//         total = platos * 75;
//     }
// }

// document.write(`Cantidad de platos: ${platos} <br> Total a pagar : ${total}`)

/**
 * ejercicio 3.4
 * pagina 89
 */

// let horas = 12;
// let total = 0;

// if (horas <= 2  ){
//     total = horas * 5;
// } else {
//     if (horas <= 5){
//         total = (2 * 5) + (horas - 2) * 4;
//     } else{
//         if (horas <= 10){
//             total = (2 * 5) + (3 * 4) + (horas - 5) * 3;
//         }
//         else{
//             total = (2*5) + (3*4) + (5*3) + (horas - 10) * 2;
//         }
//     }
// }


// document.write(`Horas en el estacionamiento : ${horas} <br> Total a pagar : s/ ${total}`) 




let tiempo = 5;
let sueldo = 1900;
let bono = 0;

if (tiempo > 4 || sueldo < 2000){
    bono = (sueldo * 0.25)
} else {
    bono = (sueldo * 0.20)
}

document.write(`Total: ${bono}`)