/* CONSEGNA:
Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
] */


$(document).ready(function(){

    const persone = [
        {
            nome: 'andrea',
            cognome: 'trento',
            eta: 56
        },
        {
            nome: 'beppe',
            cognome: 'roll',
            eta: 43
        },
        {
            nome: 'pierino',
            cognome: 'polenta',
            eta: 76
        },
        {
            nome: 'crispy',
            cognome: 'mac',
            eta: 32
        },
        {
            nome: 'robert',
            cognome: 'duval',
            eta: 98
        }
    ];

    const eta_consentita = 59;

    const permesso_persone = persone.map((persona) => {
        var permesso = '';
        if(persona.eta > eta_consentita){
            permesso = persona.nome + ' non può guidare!'
        }else{
            permesso = persona.nome + ' può guidare!'
        }
        return {
            permesso
        }
    });

    console.log(permesso_persone);








});