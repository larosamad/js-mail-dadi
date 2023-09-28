// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const clickBtn = document.getElementById('clickBtn');
let message = document.getElementById('message');

clickBtn.addEventListener("click", checkEMail);

const eMails = ['tino@tin.it', 'zino@zin.it', 'dino@din.it', 'rino@rin.it']; 

function checkEMail() {
    const eMail = document.getElementById('eMail').value;

    let eMailBoolean = false; 

    for (let i = 0; i < eMails.length; i++) {

        if (eMail == eMails[i]){
            eMailBoolean = true; 
            message.innerHTML = `Logga pure.`;
        } else {
            message.innerHTML = `e-Mail non presente nei database.`;
        }
    }

    // Senza questa variabile booleana il console.log('eMail') avrebbe continuato a ciclare. 
    if (eMailBoolean == true) {
        console.log(`Ok`);
    } else {
        console.log(`NONONONONO`);
    }
}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

let numberBtn = document.getElementById('numberBtn');
numberBtn.addEventListener("click", numbersGenerator);

let counterWinPlayer = []; 
let counterWinCpu = [];

function numbersGenerator() {
    let numberPlayer = Math.floor((Math.random() * 6) + 1);  

    let numberCpu = Math.floor((Math.random() * 6) + 1);

    let result = document.getElementById('result').innerHTML = `Il tuo numero è ${numberPlayer}, il numero della CPU è ${numberCpu}.`

    let verdict = document.getElementById('verdict');
    let counterUser = document.getElementById('counterUser');
    let counterCpu = document.getElementById('counterCpu');



    if (numberPlayer === numberCpu ){
        verdict.innerHTML = `Siete pari`;
    } else if (numberPlayer > numberCpu){
        verdict.innerHTML = `Hai vinto`;
        counterWinPlayer.push(numberPlayer); 
    } else {
        verdict.innerHTML = `Hai perso`;
        counterWinCpu.push(numberCpu);
    }

    if (counterWinPlayer.length === 1){
        counterUser.innerHTML = `In totale hai vinto ${counterWinPlayer.length} volta`
    } else {
        counterUser.innerHTML = `In totale hai vinto ${counterWinPlayer.length} volte`
    }

    if (counterWinCpu.length === 1){
        counterCpu.innerHTML = `e il PC ha vinto ${counterWinCpu.length} volta`
    } else {
        counterCpu.innerHTML = `e il Pc ha vinto ${counterWinCpu.length} volte`
    }

}
