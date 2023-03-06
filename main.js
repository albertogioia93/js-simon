'use strict';

// generazione numero random tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// INIZIALIZZO UN ARRAY VUOTO IN UNA VARIABILE. FACENDO COSì HA SOLO LUNGHEZZA 0
let numericasuali = []; 


// USO IL CICLO FOR PER RIPETERE UN DETERMINATO PASSAGGIO 5 VOLTE. IL PASSAGGIO CHE VOGLIO CREARE è NELLE GRAFFE
for(let i = 0; i < 5; i++){

    // DENTRO UNA VARIABILE METTO LA FUNZIONE FORNITA DA W3 SCHOOLS PER IL CALCOLO GENERAZIONE NUMERO RANDOM (IN QUESTO CASO TRA 1 E 100)
    const casuale = getRndInteger(1, 100);
    // DENTRO LE () DI .PUSH INSERISCO LA VARIABILE APPENA CREATA, CIOè IL NUMERO RANDOM GENERATO VIENE INSERITO NELL'ARRAY VUOTO
    numericasuali.push(casuale);

}

// STAMPO IN CONSOLE L'ARRAY CREATO IN ALTO MA CHE AL SUO INTERNO HA I 5 NUMERI CASUALI CHE HO MESSO COL CICLO FOR. LUNGHEZZA CAMBIA, DA 0 A 5
console.log(numericasuali);

// INSERISCO QUELL'ARRAY CON I 5 NUMERI CASUALI DENTRO IL DIV CREATO IN INDEX.HTML
document.getElementById('num-casuali').innerHTML = numericasuali;


// DOPO UN TIMER DI 30 SECONDI DEVO FAR SPARIRE QUEL DIV

// CON setTimeout IMPOSTO IL NOME CHE SARà NELLA FUNZIONE E I MILLESIMI DI SECONDO CHE SERVONO PER AVERE 30 SEC
setTimeout(sparito, 30000);
// CREO LA FUNZIONE USANDO QUELLO STESSO NOME VICINO AI MILLISECONDI
function sparito() {
    // RIPRENDO QUEL DIV DI INDEX.HTML E MODIFICO CIò CHE SARà SCRITTO ALL'INTERNO ALLO SCADERE DEI 30 SEC. IN QUESTO CASO 2 APICI COSì è VUOTO
    document.getElementById('num-casuali').innerHTML = '';
    
}


setTimeout(appariprompt, 31000);

let numeriutente = [];
function appariprompt() {
    for(let i = 0; i < 5; i++){
       const numeriprompt = Number(prompt('inserisci i numeri che hai visto su schermo'));
       numeriutente.push(numeriprompt);
       
    }
}


for(let i = 0; i < numericasuali.length; i++){
    if(numericasuali.includes(numeriutente)){
        console.log('complimenti');
    } else {
        console.log('ritenta');
    }

}







// CREO 5 PROMPT CHE CHIEDONO ALL'UTENTE I NUMERI VISTI PRECEDENTEMENTE SU SCHERMO

// function chiedinumero(){
//     for(let i = 0; i < 5; i++) {
//         const chiedi = prompt('inserisci i numeri che hai visto su schermo');
//         return chiedi;
//     }
// }



// const primoNumero = prompt('inserisci il primo numero che hai visto su schermo');
// const secondoNumero = prompt('inserisci il secondo numero che hai visto su schermo');
// const terzoNumero = prompt('inserisci il terzo numero che hai visto su schermo');
// const quartoNumero = prompt('inserisci il quarto numero che hai visto su schermo');
// const quintoNumero = prompt('inserisci il quinto numero che hai visto su schermo');