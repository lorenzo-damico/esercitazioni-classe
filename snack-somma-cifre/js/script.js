// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre");
var sommaCifre = 0;
for (var i = 0; i < numero.length; i++) {
  sommaCifre += parseInt(numero[i]);
}
console.log(sommaCifre);
