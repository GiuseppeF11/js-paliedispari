// Pari e dispari

/* 

Utente Sceglie o pari o dispari
Utente sceglie un numero tra 1 e 5
genero un numero random tra 1 e 5 con una funziona apposita
sommo i due numeri (quello dell'utente e quello generato random)

*/

// ASSEGNO I DUE BOTTONI
const evenBtn = document.getElementById('evenBtn');
const oddBtn = document.getElementById('oddBtn');

// INSERISCO IL PROMPT E RECUPERO IL NUMERO INSERITO DALL'UTENTE
let numUser = prompt('Inserisci un numero tra 1 e 5')
console.log('Numero Utente: ' + numUser + ' ' +typeof numUser);

// GENERO IL NUMERO CASUALE DEL CPU E LO RECUPERO
let numCpu = (getRndInteger(1 , 5));
console.log('Numero Cpu: ' + numCpu + ' ' +typeof numCpu);

// SOMMO I DUE VALORI OTTENUTI
let UserAndCpu = sum(+numUser , numCpu)
console.log('La somma dei numeri è: ' + UserAndCpu + ' ' + typeof UserAndCpu)

//
evenBtn.addEventListener('click' , function() {
    console.log(isEven(UserAndCpu));
})

oddBtn.addEventListener('click' , function() {
    console.log(isOdd(UserAndCpu));
})

//FUNZIONE PER VEDERE SE UN NUMERO E' PARI O DISPARI
function isEven(n) {
    if (n % 2 == 0) {
        return 'HAI VINTO';
    }

    return 'HAI PERSO';
}

function isOdd(n) {
    if (n % 2 !== 0) {
        return 'HAI VINTO';
    }

    return 'HAI PERSO';
}

//FUNZIONE PER SOMMARE DUE NUMERI
function sum (n1 , n2) {
    let result = n1 + n2;
    return result
}

// FUNZIONE PER SCEGLIERE CASUALMENTE UN NUMERO IN UN RANGE
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}