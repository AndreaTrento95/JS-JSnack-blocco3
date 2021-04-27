/* CONSEGNA: 
-Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lughezza.
-Calcola quanto pesano tutte le arr_zucchine. */

var zucchine = [
    {
        varieta: 'arancione',
        peso: 100,
        lunghezza: 13
    },
    {
        varieta: 'verde',
        peso: 150,
        lunghezza: 46
    },
    {
        varieta: 'giallo',
        peso: 15,
        lunghezza: 8
    },
    {
        varieta: 'viola',
        peso: 140,
        lunghezza: 5
    },
    {
        varieta: 'rosa',
        peso: 17,
        lunghezza: 34
    },
    {
        varieta: 'marrone',
        peso: 34,
        lunghezza: 67
    },
    {
        varieta: 'bianco',
        peso: 150,
        lunghezza: 21
    },
    {
        varieta: 'azzurro',
        peso: 87,
        lunghezza: 3
    },
    {
        varieta: 'nero',
        peso: 90,
        lunghezza: 78
    },
    {
        varieta: 'arcobaleno',
        peso: 39,
        lunghezza: 14
    }
];

var peso_totale = 0;

for(var zucchina of zucchine){
    peso_totale += zucchina['peso'];
}

console.log('Il peso totale è '+ peso_totale);