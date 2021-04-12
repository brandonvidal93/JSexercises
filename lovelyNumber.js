function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  var countLovely = 0;
  var countDigit = 1;
  var maxRepeat = 0;
  var toArray = new Array(B);

  for (let i = A; i <= B; i++) {

    toArray[i] = i;

    if (toArray[i] < 100) {
      countLovely++;
    } else {
      let auxArray = (toArray[i] + '').split('');
      for (var j = 0; j < auxArray.length; j++) { auxArray[j] = Number(auxArray[j]); }

      auxArray.sort((a, b) => a - b);

      for (let k = 0; k < auxArray.length; k++) {
        if (k + 1 <= auxArray.length) {
          if (auxArray[k] === auxArray[k + 1]) {
            countDigit++;
            if (maxRepeat < countDigit) { maxRepeat = countDigit; }
          } else {
            countDigit = 1;
          }
        }
      }

      if (maxRepeat <= 2) { countLovely++; }

      maxRepeat = 0;
    }
  }

  return countLovely;
}

let numA = 1;
let numB = 1000;

console.log('-------------------------------');
console.log('---- Números encantadores -----');
console.log('--- Ejecución de la función ---');
console.log('-------------------------------');
console.log('---- Números del '+ numA + ' al ' + numB + ' -----');
console.log('- Cantidad de números encantadores: -');
console.log('Cantidad lovely: ' + solution(numA, numB));
console.log('-------------------------------');

/*
var countLovely = 0; // Contador de numeros encantadores
var countDigit = 1; // Contador de repeticion de dígitos
var maxRepeat = 0;
var toArray = new Array(B); // Array para colocar cada numero, como límite el número B

for (let i = A; i <= B; i++) {

  toArray[i] = i; // Asignación del numero en cada pos del array

  // Los números menores a 100 (0 - 99) son encantadores porque sus cifras no se repiten más de 2 veces
  if (toArray[i] < 100) {

    countLovely++; // Contador de numeros encantadores

  } else {
    let auxArray = (toArray[i] + '').split(''); // Array auxiliar para separar los dígitos de los números de 100 en adelante
    for (var j = 0; j < auxArray.length; j++) {
      auxArray[j] = Number(auxArray[j]); // Convierto a Number
    }

    auxArray.sort((a, b) => a - b); // Orden de menor a mayor para buscar repetidos

    for (let k = 0; k < auxArray.length; k++) {

      // k + 1 debe ser menor o igual al tamaño del auxArray
      if (k + 1 <= auxArray.length) {

        // comparación de valores del auxArray
        if (auxArray[k] === auxArray[k + 1]) {

          countDigit++; // contador de repeticiones

          // se guarda la repetición max
          if (maxRepeat < countDigit) {
            maxRepeat = countDigit;
          }
        } else {

          // reseteo del countDigit cuando la compación no es igual
          countDigit = 1;
        }
      }
    }

    // si hay una repetición mayor a 2 no cuenta el numero como encantador
    if (maxRepeat <= 2) {
      countLovely++;
    }

    // reseteo de maxRepeat para el siguient numero del toArray
    maxRepeat = 0;
  }
}

return countLovely;
}
*/
