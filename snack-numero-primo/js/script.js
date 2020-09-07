// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

function numeroPrimo(numero) {
  if (numero == 0 || numero == 1) {
    return false;

  } else if (numero == 2) {
    return true;

  }

  for (var i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

var numeroUtente = parseInt(prompt("Inserisci un numero"));


if (numeroPrimo(numeroUtente)) {
  console.log("Il numero è primo");
} else {
  console.log("Il numero non è primo");
}
