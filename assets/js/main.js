/* 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */


//Visualizzare in pagina 5 numeri casuali. 

/** genero un numero casuale in un intervallo specifico ==> da 'min' a 'max' <==
 * @param {*} min valore minimo
 * @param {*} max valore massimo
 * @returns 1 valore casuale
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getRandomInteger(1, 10));

function generateElement(element, num) {
    const memoryNumberElement = document.querySelector('.numberMemory');
    const listNumber = generateArrayNumberRandom(1, 100, num);
    for (let i = 0; i < listNumber.length; i++) {
        const numberElement = listNumber[i];
        const domElement = document.createElement(element);
        domElement.append(numberElement);
        memoryNumberElement.append(domElement);
    }
    return listNumber;
}
const listVisibleNumber = generateElement('span', 5);

/** genero un array di numeri casuali di una lunghezza pari a 'ammount' (nel mio caso 5) in un intervallo specifico ==> da 'min' a 'max' <==
 * @param {*} min valore minimo
 * @param {*} max valore massimo
 * @returns array di 5 numeri casuali diversi tra loro
 */
function generateArrayNumberRandom(min, max, ammount) {
    const listNumberRandom = [];

    while (listNumberRandom.length !== ammount) {
        const numberRandom = getRandomInteger(min, max);
        if (!listNumberRandom.includes(numberRandom)) {
            listNumberRandom.push(numberRandom);
        }
    }
    return listNumberRandom;
}
//console.log(generateNumberRandom(1, 10, 5));


// Attivare un timer di 30 secondi
let timer = setInterval(timerCounter, 1000);
let counter = 5;

/** timer di 30 secondi
 */
function timerCounter() {
    document.getElementById("timer").value = counter;
    counter--;
    if (counter == 0) {
        clearInterval(timer);
    }
}

setTimeout(hideNumbers, 5500);


function hideNumbers() {
    document.querySelector('.numberMemory').classList.add('d_none');
    document.getElementById('timer').classList.add('d_none');
}

setTimeout(showPrompt, 5600, 5);

// array di numeri creati dall'utente
function showPrompt(num) {
    const listNumberUser = [];
    for (let i = 0; i < num; i++) {
        let numberUser = Number(prompt('Inserisci i numeri che hai visualizzato'));
        if (!listNumberUser.includes(numberUser) && listVisibleNumber.includes(numberUser)) {
            listNumberUser.push(numberUser);
        }
    }

    return alert(`Hai indovinato ${listNumberUser.length}/${listVisibleNumber.length
    } - I numeri indovinati sono ${listNumberUser}`);
}

//console.log(timerNumber(0, 10));