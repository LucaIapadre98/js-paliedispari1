// # Pari e Dispari
   // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
   //  Sommiamo i due numeri
   //Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   //Dichiariamo chi ha vinto.

   const userChoice = prompt("Inserisci un numero da 1 a 5 ('Scegli se paro o disparo'):");
   let max = 5;
   let min = 1;
   const sum = userChoice + randomNumber(max, min);
   

   console.log(userChoice);

   function randomNumber(max= 5, min= 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
   }

    console.log(sum);

    function sumNumberRandom(iseven, isodd) {
        if(sum === iseven){
            alert("Hai vinto!")
            console.log("Hai vinto!");
            return true;
            
        }
        if (sum === isodd){
            alert("Hai perso!");
            console.log("Hai perso!");
            return false;
        }
    }
    console.log(sum);
    sumNumberRandom();
    
    


   

