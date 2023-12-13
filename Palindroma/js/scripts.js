// Palindroma

// Definisco una variabile che corrisponde all'input-stringa dell'utente
const word = prompt('Scrivi una parola');
console.log('La parola è ' + word + ' ' + typeof word)

// Creo una funzione per invertire la stringa
function ReverseString(word) {
    return word.split('').reverse().join('')
}
 
// Richiamo la funzione per vedere la stringa invertita
console.log(ReverseString(word));

// Assegno la stringa invertita
const wordReverse = ReverseString(word);

// Definisco la funzione per confrontare le due stringhe
function isPalin(word) {
    if (word == wordReverse) {
        return true
    }

    return false
}

// Richiamo la funzione
console.log(isPalin(word));