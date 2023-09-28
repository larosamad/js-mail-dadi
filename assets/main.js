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
