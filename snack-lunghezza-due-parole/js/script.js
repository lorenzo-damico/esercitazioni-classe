// Dare la possibilità di inserire due parole. Verificare tramite
// una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.

function sameLength(parola1, parola2) {

  if (parola1.length == parola2.length) {
    return true;
  }

  return false;
}


var primaParola = prompt("Inserisci una parola.");

var secondaParola = prompt("Inserisci un'altra parola");

if (sameLength(primaParola, secondaParola)) {
  console.log("Le due parole hanno la stessa lunghezza: " + primaParola + ", " + secondaParola + ".");

} else if (primaParola.length > secondaParola.length) {
  console.log("La parola più lunga è la prima: " + primaParola + ".");

} else {
  console.log("La parola più lunga è la seconda: " + secondaParola + ".");
}
