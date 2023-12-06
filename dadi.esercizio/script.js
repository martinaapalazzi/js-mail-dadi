/*
Dadi esercizio:

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

Domande:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/ 

const randomNumberMarti = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log (randomNumberMarti);

const randomNumberBrowser = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log (randomNumberBrowser);

let winnerMarti = 'Marti is the winner!';
let winnerBrowser = 'Browser is the winner :(';
let pareggio = 'Pareggio!'

if (randomNumberMarti > randomNumberBrowser) {
        console.log (winnerMarti)
}
else if (randomNumberBrowser > randomNumberMarti) {
    console.log (winnerBrowser)
}
else {
    console.log  (pareggio)
}

