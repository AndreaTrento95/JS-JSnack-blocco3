/* CONSEGNA:
Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */



$(document).ready(function(){

    // array di stringhe
    const arrNomi = [
        'andrEa',
        'giuseppe',
        'COSTANTINO',
        'Piero',
        'ciao'
    ];

    console.log(createArrCap(arrNomi));



    // function
    function createArrCap(arr){

        let arrCap = arr.map((nome) => {
            nome.toLowerCase();
            
        });

        return arrCap;


    };



});