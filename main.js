'use strict';

// generazione numero random tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// INIZIALIZZO UN ARRAY VUOTO IN UNA VARIABILE. FACENDO COSì HA SOLO LUNGHEZZA 0
let numericasuali = []; 


// USO IL CICLO FOR PER RIPETERE IL PASSAGGIO 5 VOLTE. AD OGNI PASSAGGIO VIENE GENERATO UN NUMERO CASUALE TRA 1 E 100
for(let i = 0; i < 5; i++){

    // DENTRO UNA VARIABILE METTO LA FUNZIONE FORNITA DA W3 SCHOOLS PER IL CALCOLO GENERAZIONE NUMERO RANDOM (IN QUESTO CASO TRA 1 E 100)
    const casuale = getRndInteger(1, 100);
    // DENTRO LE () DI .PUSH INSERISCO LA VARIABILE APPENA CREATA, CIOè IL NUMERO RANDOM GENERATO VIENE INSERITO NELL'ARRAY VUOTO
    numericasuali.push(casuale);

}

// STAMPO IN CONSOLE L'ARRAY CREATO IN ALTO MA CHE AL SUO INTERNO HA I 5 NUMERI CASUALI CHE HO MESSO COL CICLO FOR. LUNGHEZZA CAMBIA, DA 0 A 5
console.log(numericasuali);

const numeriIndex = getElementById('num-casuali').innerHTML = numericasuali;