/////////// GLOBAL////////////////

const userNameElem = document.getElementById ("nome");
console.log(userNameElem);

const userDistanzElem = document.getElementById ("distanza");
console.log(distanza);

const userEtaElement = document.getElementById ("eta");
console.log(userEtaElement);

const prezzoBase = 0.21;
const scontoMinori = 0.20;
const scontoOver = 0.40;



/////////////FUNZIONAMENTO AL CLICK////////////
const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {

    //RACCOLTA DATI
    console.log("funziona");
    const userName = userNameElem.value;
    const userDistanza = parseInt(userDistanzElem.value);
    const userEta = userEtaElement.value;
    console.log(userName, userDistanza, typeof userDistanza, userEta, typeof userEta);


    // LOGICA DEL PROGRAMMA
    let biglettoIntero = (userDistanza * prezzoBase);
    console.log(biglettoIntero, typeof biglettoIntero);

    if ( userEta === "minore") {
        let biglietto = biglettoIntero - (biglettoIntero * scontoMinori);
        console.log(biglietto);


    } else if ( userEta === "standard") {
        let biglietto = biglettoIntero;
        console.log(biglietto);


    } else if ( userEta === "over") {
        let biglietto = biglettoIntero - (biglettoIntero * scontoOver);
        console.log(biglietto);
    }




})