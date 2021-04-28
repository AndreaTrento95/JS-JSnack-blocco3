/* CONSEGNA:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

var list = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
var min = parseInt(prompt('Inserisci un numero compreso tra 0 e ' + list.length - 2));
var max = parseInt(prompt('Inserisci un numero compreso fra '+ (min + 1) +' e ' + (list.length - 1)));

console.log(filterArray(list, min, max));


// -------- function ----------
function filterArray(arr, min, max){
    var arrReturn = [];

    for(var i in list){
        if(i >= min && i <= max){
            arrReturn.push(arr[i]);
        };
    };

    return arrReturn;
};