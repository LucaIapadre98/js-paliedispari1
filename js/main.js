// # Pari e Dispari
   // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
   //  Sommiamo i due numeri
   //Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   //Dichiariamo chi ha vinto.

   const userChoice = prompt("Inserisci un numero da 1 a 5 ('Scegli se paro o disparo'):");
   let max = 5;
   let min = 1;
   
   console.log(userChoice);

   function numberRandom(max, min) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
   }

