/* CONSEGNA:
-Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro.
-es[a,b,c], [1,2,3] ---> [a,1,b,2,c,3]. */


var arr_letter = ['a', 'b', 'c' ];
var arr_number = [1, 2, 3];
var arr_fusioned = [];

console.log(arrayFusion(arr_letter, arr_number, arr_fusioned));




//-------  function -------
function arrayFusion(array1, array2, arrFusion){
    for(var i = 0; i < array1.length; i++){
        arrFusion.push(array1[i]);
        arrFusion.push(array2[i]);
    };
};