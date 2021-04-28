/* CONSEGNA:
-Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
-il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
-la media punti fatti per partita deve essere compresa tra 0 e 50
-la percentuale di successo per i tiri da 3 punti deve essere compresa tra 0 e 100 */

// creo array team contenente i giocatori (oggetti)
var squadra = [
    {
        nome: "Newton"
    },
    {
        nome: "Renzo"
    },
    {
        nome: "Dario"
    },
    {
        nome: "Ibra"
    },
    {
        nome: "Pascal"
    }
];

// ad ogni oggetto dell'array aggiungo le proprietà richieste
for(var giocatore of squadra){
    // aggiungo la proprietà code agli oggetti giocatore
    giocatore.code = codeGenerator();

    // aggiungo la media dei punti
    giocatore.media = getRandomNumber(0, 50);

    // aggiungo la percentuale
    giocatore.percentuale = getRandomNumber(0, 100);
};


console.log(squadra);


// ----------- function -----------
// generatore di codici

function codeGenerator(){
    var code = "";
    var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

    // creo la parte del codice relativa alle lettere
    while(code.length < 3){
        //estraggo in base alla generazione random di numeri 3 lettere
        code += alfabeto[getRandomNumber(0, alfabeto.length - 1)];
    };

    // aggiungo la parte relativa ai numeri
    while(code.length < 6){
        // estraggo 3 numeri random da concatenare alla stringa code
        code += getRandomNumber(0, 9);
    };


    return code;
};

// generatore di numeri casuali
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};