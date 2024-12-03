const invitati = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ];

  const userName = prompt("Inserisci il tuo nome");

  for (let i = 0; i < invitati.length; i++) {
      if (userName === invitati[i]) {
          alert("Puoi partecipare alla festa");
          break;
      }

      if (i === invitati.length - 1) {
        alert("Non sei in lista, non puoi partecipare");
    }
}
