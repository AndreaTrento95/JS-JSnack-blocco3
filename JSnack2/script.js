/* CONSEGNA:
-Crea 10 oggetti che rappresentano una zucchina.
-Dividi in due array separati le zucchine che misurano meno o più di 15cm.
-Infine stampa separatamente quanto pesano i due gruppi di zucchine. */



//    ------- 1) -------
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


//      ------- 2) ------
var arr_minore = [];
var arr_maggiore = [];

for(var zucchina of zucchine){
    if(zucchina['lunghezza'] > 15){
        arr_maggiore.push(zucchina)
    }else if(zucchina['lunghezza'] < 15){
        arr_minore.push(zucchina);
    };
};

console.log(arr_minore);
console.log(arr_maggiore);


//   ------- 3) --------
var peso_minore = 0;
var peso_maggiore = 0;

for(var a of arr_minore){
    peso_minore += a['peso'];
};

for(var b of arr_maggiore){
    peso_maggiore += b['peso'];
};

console.log('Il peso totale delle zucchine lunghe meno di 15 cm è '+ peso_minore +'g');
console.log('Il peso totale delle zucchine lunghe più di 15 cm è '+ peso_maggiore +'g');