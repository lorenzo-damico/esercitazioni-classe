// Crea un array vuoto e chiedi all’utente un numero da
// inserire nell’array. Continua a chiedere i numeri all’utente e
// a inserirli nell’array fino a quando la somma degli elementi
// è minore di 50.

var numeri = [];
console.log(numeri);

var somma = 0;
var limite = 50 - somma;

while (somma < 50) {
  var numeroUtente = parseInt(prompt("Inserisci un numero"));
  if (numeroUtente <= limite) {
    console.log("Aggiungo: " + numeroUtente);
    numeri.push(numeroUtente);
    console.log(numeri);
    somma += numeroUtente
    console.log("L'ammontare della somma è: " + somma);
    limite = 50 - somma;
  }
}
