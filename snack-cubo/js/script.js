// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

function pow(num) {
  var cuboNum = Math.pow(num, 3);
  return cuboNum;
}
console.log(pow(3));

var numUtente = parseInt(prompt("Inserisci un numero"));
for (var i = 0; i <= numUtente; i++) {
  var cubo = pow(i);
  console.log(cubo);
}
