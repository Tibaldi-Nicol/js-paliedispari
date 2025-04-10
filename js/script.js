/*
function checkpalindroma(string) {
    // Divido la stringa in un array di caratteri
    let splitted = string.split('');
    
    // Inverto l'ordine dei caratteri nell'array
    let reversed = splitted.reverse();
    
    // Unisco i caratteri invertiti in una nuova stringa
    let joined = reversed.join('');
    
    // Stampo i valori intermedi 
    console.log(splitted);  // Array di caratteri (già invertito)
    console.log(reversed);  // Lo stesso array di splitted (sono lo stesso riferimento)
    console.log(joined);    // Stringa invertita
    
    // Confronto la stringa originale con quella invertita
    if (string.toLowerCase() === joined.toLowerCase()) { // È palindroma perche la stringa originale è uguale a quella invertita

        console.log(`"${string}" è palindroma!`);
        alert(`"${string}" è palindroma!`);
    } else {
        console.log(`"${string}" non è palindroma.`); // Non è palindroma
        alert(`"${string}" non è palindroma.`); // Non è palindroma
    }
}

// Chiedo all'utente di inserire una parola
let word = prompt('Inserisci una parola');

// Eseguo il controllo palindroma
checkpalindroma(word);
*/

// ESERCIZIO 2 PARI O DISPARI
//questa funzione genera un numero random tra 1 e 5
function generaNumeroRandom(min, max) {
    // qui dentro scrivo il codice per generare un numero random tra min e max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//questa funzione controlla se un numero è pari o dispari
function verificaPariDispari(numero) {
    // qui dentro scrivo il codice per verificare se un numero è pari o dispari
    // descrivo dettagliatamente il procedimento logico
    // se il resto della divisione del numero per 2 è uguale a 0 allora il numero è pari
    // altrimenti è dispari
    //semplice if else
    if (numero % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

// ora comuni allutente se vuole scegliere pari o dispari
let sceltaUtente = prompt('Scegli pari o dispari');
//faccio scegliere un numero all'utente da 1 a 5
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

//genero un numero random 
let numeroRandom = generaNumeroRandom(1, 5);
console.log(numeroRandom, 'numerorandom');

//sommo i due numeri
let somma = numeroUtente + numeroRandom;
console.log(somma, 'somma');

//verifico se la somma è pari o dispari
let risultato = verificaPariDispari(somma);
console.log(risultato, 'risultato');

//verifico se l'utente ha vinto
if (risultato === sceltaUtente) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

//spiegazione esercizio 2
//chiedo all'utente di scegliere tra pari e dispari
//chiedo all'utente di scegliere un numero da 1 a 5
//genero un numero random da 1 a 5
//sommo i due numeri
//verifico se la somma è pari o dispari
//verifico se l'utente ha vinto o perso
//stampo il risultato

//spiegazione esercizio 1
//chiedo all'utente di inserire una parola
//controllo se la parola è palindroma
//stampo il risultato
