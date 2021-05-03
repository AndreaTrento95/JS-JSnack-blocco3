/* CONSEGNA:
Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.
 */


$(document).ready(function(){


    const animali = [
        {
            nome: 'leone',
            famiglia: 'felini',
            classe: 'mammiferi'
        },
        {
            nome: 'cane',
            famiglia: 'canidi',
            classe: 'mammiferi'
        },
        {
            nome: 'gallina',
            famiglia: 'fasianidi',
            classe: 'uccelli'
        },
        {
            nome: 'delfino',
            famiglia: 'cetacei',
            classe: 'mammiferi'
        },
        {
            nome: 'orso',
            famiglia: 'ursidi',
            classe: 'mammiferi'
        },
        {
            nome: 'lucertola',
            famiglia: ' a caso',
            classe: 'rettili'
        },
        {
            nome: 'cobra',
            famiglia: 'lumbricidae',
            classe: 'clitellata'
        },
    ];

    // nuovo array con i mammiferi
    const newAnimals = animali.filter((animale) => animale.classe === 'mammiferi');
    console.log(newAnimals);

});