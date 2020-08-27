/*  Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
    un numero, se è dispari inseriscilo nell’array.
*/

// 1. Creo un array vuoto
var numeri = [];
console.log(numeri);
/* 2. Creo un ciclo while per chiedere 6 volte all'utente un numero
      se è dispari lo inserisco nell'array
*/
var i = 0;
while (i < 6) {
  var numeroUtente = parseInt(prompt("Inserisci un numero"));
  if (numeroUtente % 2 == 1) {
    numeri.push(numeroUtente);
  }
  console.log(numeroUtente);
  i++;
}

console.log(numeri);
