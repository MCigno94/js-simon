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


/** genero un array di numeri casuali di una lunghezza pari a 'ammount' (nel mio caso 5) in un intervallo specifico ==> da 'min' a 'max' <==
 * @param {*} min valore minimo
 * @param {*} max valore massimo
 * @returns array di 5 numeri casuali diversi tra loro
 */
function generate5NumberRandom(min, max, ammount) {
    const listNumberRandom = [];

    while (listNumberRandom.length !== ammount) {
        const numberRandom = getRandomInteger(min, max);
        if (!listNumberRandom.includes(numberRandom)) {
            listNumberRandom.push(numberRandom);
        }
    }
    return listNumberRandom;
}
//console.log(generate5NumberRandom(1, 10, 5));