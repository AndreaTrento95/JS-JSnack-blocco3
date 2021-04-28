/* CONSEGNA:
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var arr1 = [
    "a",
    "b",
    "c",
    "d"
];

var arr2 = [1,2,3,4,5,6,7,8,9];


// devo sapere quale array ha meno elementi
var minor = arr1;
var major = arr2;

if(arr1.length > arr2.length){
    minor = arr2;
    major = arr1;
};


// aggiungo solo se la lunghezza degli array non coincide

if(arr1.length === arr2.length){
    console.log('sono uguali')
}else{
    while(minor.length < major.length){
        minor.push(getRandomNumber());
    };
};

console.log(arr1.length);
console.log(arr2.length);


// ------- function -------
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
