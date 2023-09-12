// Creo la lista degli utenti registrati
const listUser = ["ciccio@ugo.com", "pippo@baudo.com", "mario@rossi.com"]

// Creo la variabile che contiene l'email inserita manualmente dall'utente che vuole accedere
const emailUser = prompt("Inserisci la tua email")
console.log(emailUser)

// Inserisco una variabile Booleana
let match = false;

// Eseguo il ciclo per scorrere all'interno della lista
for(i = 0; i < listUser.length; i++){
  // Se l'email inserita è contenuta nella lista
  if(emailUser === listUser[i]){
    match = true;
    console.log("Puoi entrare")
  }
}
// Se l'email inserita non è contenuta nella lista
if(match === false){
  console.log("Non puoi entrare")
}




