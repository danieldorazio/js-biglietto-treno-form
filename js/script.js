/////////// GLOBAL////////////////

const userNameElem = document.getElementById ("nome");
console.log(userNameElem);

const userDistanzElem = document.getElementById ("distanza");
console.log(distanza);

const userEtaElement = document.getElementById ("eta");
console.log(userEtaElement);


/////////////FUNZIONAMENTO AL CLICK////////////
const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {

    //RACCOLTA DATI
    console.log("funziona");
    const userName = userNameElem.value;
    const userDistanza = userDistanzElem.value;
    const userEta = userEtaElement.value;
    console.log(userName, userDistanza, userEta);






})