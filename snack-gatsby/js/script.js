/*  In un array sono contenuti i nomi degli invitati alla festa del
    grande Gatsby, chiedi all’utente il suo nome e comunicagli se
    può partecipare o no alla festa.
*/

// 1. Creo un array contenente la lista degli invitati
var listaInvitati = ["Topolino", "Lorenzo", "Paperino"];
console.log(listaInvitati);

// 2. Chiedo all'utente il suo nome
var nomeUtente = prompt("Inserisci il tuo nome");
console.log(nomeUtente);

/* 3. Confronto il nome dell'utente con la lista
      se è presente, gli dico che può entrare
      se non è presente, gli dico che non può entrare
*/
var presente = false;
for (var i = 0; i < listaInvitati.length; i++) {
  if (nomeUtente == listaInvitati[i]) {
    presente = true;
  }
}

if (presente == true) {
  alert("Puoi entrare!");
} else {
  alert("Non sei in lista!");
}
