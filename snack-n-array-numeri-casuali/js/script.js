// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali
// tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

function randomNumber(min, max) {
  var numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroCasuale;
}

// PRIMO METODO, CON CICLO DENTRO

function createArray(numeroArray) {
  for (var i = 0; i < numeroArray; i++) {
    var contenitore = [];
    for (var j = 0; j < 10; j++) {
      contenitore.push(randomNumber(1, 100));
    }
    console.log("Array numero " + (i + 1) + ": " + contenitore);
  }
}

var n = parseInt(prompt("Inserisci un numero"));

createArray(n);



// SECONDO METODO, CON FUNZIONE A 3 PARAMETRI

// function generaArrayDiXNumeri(quantitaNumeri, min, max) {
//   var contenitore = [];
//   for (var i = 0; i < quantitaNumeri; i++) {
//     contenitore.push(randomNumber(min, max));
//   }
//   return contenitore;
// }
//
// var n = parseInt(prompt("Inserisci un numero"));
//
// for (var i = 0; i < n; i++) {
//   console.log(generaArrayDiXNumeri(10, 1, 100));
// }
