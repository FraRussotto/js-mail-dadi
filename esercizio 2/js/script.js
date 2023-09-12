// Creo il bottone con cui l'utente può "lanciare il dado"
const btnPlay = document.getElementById("gioca");
// Creo le variabili che conterranno i risultati di user e pc
let userPoint;
let pcPoint;

// Metto in ascolto il bottone creato
btnPlay.addEventListener("click", function(){

  //Creo i punteggi che possono ottenere user e pc
  userPoint = Math.ceil(Math.random() * 6);
  document.querySelector(".user_point").innerHTML = "Il tuo punto è" + " " + userPoint;
  pcPoint = Math.ceil(Math.random() * 6);
  document.querySelector(".pc_point").innerHTML = "Il punto del pc è" + " " + pcPoint;

  // Stabilisco le condizioni di vittoria, perdita e pareggio
  if(userPoint > pcPoint){
    document.querySelector(".result").innerHTML = "Hai vinto!";
  } else if(userPoint < pcPoint){
    document.querySelector(".result").innerHTML = "Hai perso!";
  } else if(userPoint === pcPoint){
    document.querySelector(".result").innerHTML = "Hai pareggiato! Vuoi giocare ancora?";
  }
});