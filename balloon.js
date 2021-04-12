function removeBalloon(S, countBalloon = 0) {
  const objBalloon = { B: 1, A: 1, L: 2, O: 2, N: 1 }
  let countLetter = 0;

  for (let letter of S) {
    if (objBalloon[letter] > 0) {
      let regex = new RegExp(letter); // Expresión regular con la letra encontrada en la cadena
      S = S.replace(regex, ''); // Se reemplaza con '' la letra encontrada que hacer parte de BALLOON
      objBalloon[letter] -= 1; // Se le resta 1 a la letra encontrada en el obj
      countLetter += 1;
    }
  }

  if (countLetter === 7) {
    countBalloon++; // Si se elimina un BALLOON completo cuenta
    return removeBalloon(S, countBalloon); // Retorna nuevamente la función para continuar con el proceso de eliminación de BALLOON
  }

  return countBalloon; // Retorna la cantidad de BALLOON eliminados
}

let letters = 'AQBAWELRYTLXXOUIIONUSBNBMXXFJAKLOPLILGDFOCDSDFXXXXONS';
// let letters = 'XXBALLOONXX';
// let letters = 'ZZBALLODFG';

console.log('-------------------------------');
console.log('------- Remove Balloons -------');
console.log('--- Ejecución de la función ---');
console.log('-------------------------------');
console.log('---- Cadena de String '+ letters + ' -----');
console.log('- Cantidad de BALLOON Eliminado: -');
console.log('BALLOON Removed: ' + removeBalloon(letters));

/*
function removeBalloon(S, countBalloon = 0) {
  const objBalloon = { B: 1, A: 1, L: 2, O: 2, N: 1 }
  let countLetter = 0;

  for (let letter of S) {
    // console.log('cada letra de S: ' + letter);
    if (objBalloon[letter] > 0) {
      console.log('Se encuentra la letra ' + letter + ' objBalloon');
      console.log(objBalloon[letter]);
      let regex = new RegExp(letter); // Expresión regular con la letra encontrada en la cadena
      S = S.replace(regex, ''); // Se reemplaza con '' la letra encontrada que hacer parte de BALLOON
      console.log(S);
      objBalloon[letter] -= 1; // Se le resta 1 a la letra encontrada en el obj
      console.log(objBalloon);
      countLetter += 1;
      console.log('countLetter ' + countLetter);
    }
  }

  if (countLetter === 7) {
    countBalloon++; // Si se elimina un BALLOON completo cuenta
    return removeBalloon(S, countBalloon); // Retorna nuevamente la función para continuar con el proceso de eliminación de BALLOON
  }

  return countBalloon; // Retorna la cantidad de BALLOON eliminados
}
*/
