/**
 * SENTENCIA break vs continue
 *  break => interrumpir todas las iteraciones que quedan
 * por darse un ciclo en una estructura repetitiva
 * 
 *  continue => interrumpe la iteración actual, y salta
 * automaticamente a la sgte iteración
 */


// let numeros = [3,14,123,4,55,-5,1,23,,];

/**
 * Ejercicio: imprimir los números hasta encontrar un número negativo
 */

// for (let i = 0; i < numeros.length; i++){
//     if (numeros[i] >= 0){
//         console.log(numeros[i]);
//     } else{
//         break;
//     }
// }

/**
 *  EJERCICIO: si un numero es impar imprimirlo, y en caso contrario saltar a la siguiente iteración
 * a % b === 0
 */

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        continue;
    }
    console.log(numeros[i]);
}
 
