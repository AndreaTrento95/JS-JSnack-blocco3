/* CONSEGNA:
1-Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
2-Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
3-Infine stampa separatamente i 3 array. */

$(document).ready(function(){

    // 1)
    const macchine = [
        {
            marca: 'bmw',
            modello: 'serie 8' ,
            alimentazione: 'diesel'
        },
        {
            marca: 'audi',
            modello: 'v8' ,
            alimentazione: 'gpl'
        },
        {
            marca: 'lamborghini',
            modello: 'X' ,
            alimentazione: 'metano'
        },
        {
            marca: 'merchedes',
            modello: 'OP' ,
            alimentazione: 'elettrico'
        },
        {
            marca: 'fiat',
            modello: 'panda' ,
            alimentazione: 'benzina'
        },
        {
            marca: 'fiat',
            modello: '500' ,
            alimentazione: 'gpl'
        },
        {
            marca: 'alfa romeo',
            modello: 'giulietta' ,
            alimentazione: 'metano'
        },
        {
            marca: 'maserati',
            modello: 'levante' ,
            alimentazione: 'diesel'
        },
        {
            marca: 'ferrari',
            modello: 'sf90' ,
            alimentazione: 'benzina'
        },
        {
            marca: 'pagani',
            modello: 'Imola' ,
            alimentazione: 'diesel'
        }
    ];


    // 2)
    const auto_benzina = macchine.filter((macchina) => macchina.alimentazione === 'benzina');
    const auto_diesel = macchine.filter((macchina) => macchina.alimentazione === 'diesel');
    const auto_restanti = macchine.filter((macchina) => macchina.alimentazione != 'benzina' && macchina.alimentazione != 'diesel' );


    // 3)
    let html_benzina = $('#benzina');
    let html_diesel = $('#diesel');
    let html_restanti = $('#restanti');

    // stampo a video 
    printAuto(auto_benzina, html_benzina);
    printAuto(auto_diesel, html_diesel);
    printAuto(auto_restanti, html_restanti);




    // functions
    function printAuto(arr, target){
        arr.forEach((auto) => {
            let {marca, modello, alimentazione} = macchine;

            let html = `
                <li>
                    Marca: ${marca} <br>
                    Alimentazione: ${alimentazione} <br>
                    Modello: ${modello}
                </li>
            `;
            target.append(html);
        });
    }













});

