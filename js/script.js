
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