function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

var numeroUtente = parseInt(prompt("Inserisci un numero"));
alert(isEven(numeroUtente));

if (isEven(numeroUtente) == true) {
  var nomeUtente = prompt("Inserisci il tuo nome");
  console.log("Ciao, " + nomeUtente);
}
