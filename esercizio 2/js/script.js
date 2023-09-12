// Creo il bottone con cui l'utente può "lanciare il dado"
const btnPlay = document.getElementById("gioca");
// Creo le variabili che conterranno i risultati di user e pc
let userPoint;
let pcPoint;

// Metto in ascolto il bottone creato
btnPlay.addEventListener("click", function(){

  //Creo i punteggi che possono ottenere user e pc
  userPoint = Math.ceil(Math.random() * 6);
  console.log(userPoint)
  pcPoint = Math.ceil(Math.random() * 6);
  console.log(pcPoint)

  // Stabilisco le condizioni di vittoria, perdita e pareggio
  if(userPoint > pcPoint){
    console.log("Hai vinto!")
  } else if(userPoint < pcPoint){
    console.log("Hai perso!")
  } else if(userPoint === pcPoint){
    console.log("Hai pareggiato! Vuoi giocare ancora?")
  }
});