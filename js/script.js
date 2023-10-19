/////////// GLOBAL////////////////

const userNameElem = document.getElementById ("nome");
console.log(userNameElem);

const userDistanzElem = document.getElementById ("distanza");
console.log(distanza);

const userEtaElement = document.getElementById ("eta");
console.log(userEtaElement);

const resultSection = document.querySelector(".result-section");

const prezzoBase = 0.21;
const scontoMinori = 0.20;
const scontoOver = 0.40;

let biglietto;
let offerta;



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
        biglietto = biglettoIntero - (biglettoIntero * scontoMinori);
        offerta = "Sconto Minori";
        console.log(biglietto);


    } else if ( userEta === "standard") {
        biglietto = biglettoIntero;
        offerta = "Standard"
        console.log(biglietto);


    } else if ( userEta === "over") {
        biglietto = biglettoIntero - (biglettoIntero * scontoOver);
        offerta = "Sconto Over"
        console.log(biglietto);
    }


    // NUMERO CARROZZA
    const carrozza = Math.floor(Math.random() * 10) + 1;


    // NUMERO CARROZZA
    const codiceCp = Math.floor(Math.random() * 10000) + 10000;
 


    // Output
    document.getElementById("nome-passeggero").innerHTML += userName;
    document.getElementById("offerta").innerHTML += offerta;
    document.getElementById("carrozza").innerHTML += carrozza;
    document.getElementById("codice-cp").innerHTML += codiceCp;
    document.getElementById("costo-biglietto").innerHTML += ` ${biglietto.toFixed(2)}`;
    resultSection.classList.remove("ms_d-none");
})

document.getElementById("clear").addEventListener("click", function () {
    userNameElem.value = "";
    userDistanzElem.value = "";
    userEtaElement.value = "";
    document.getElementById("nome-passeggero").innerHTML = "";
    document.getElementById("offerta").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codice-cp").innerHTML = "";
    document.getElementById("costo-biglietto").innerHTML = "";
    resultSection.classList.addEventListener("ms_d-none");
})