/*
Mail esercizio:

- Chiedi all'utente la sua email
- Controlla che sia nella lista di chi può accedere.
- Stampa un messaggio appropriato sull'esito del controllo.

*/ 


const userEmail = prompt ("Qual'è la tua email?")

console.log ('userEmail', userEmail, typeof userEmail)

const emails = [
    'martinaapalazzi@gmail.com',
    'martinaapalazzi@icloud.com',
    'martinapalazzzi@gmail.com',
    'martipalazzi@gmail.com',
]

let messaggio = "You're out"; 

for ( let i = 0; i < emails.length; i++) {
    if (userEmail == emails[i]) {
        messaggio = "You're in!"
    }
   
}

alert (messaggio)
