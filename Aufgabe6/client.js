"use strict";
var Client;
(function (Client) {
    console.log("Client läuft neu");
    const url = "http://127.0.0.1:3000"; // localhost
    const path = "/convertDate";
    const eingabe = document.getElementById("myForm");
    const übergabeButton = document.getElementById("übergabe");
    übergabeButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    async function sendForm() {
        let formData = new FormData(eingabe);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        ;
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        let textAusgabe = document.createElement("p");
        textAusgabe.textContent = responseText;
        eingabe.appendChild(textAusgabe);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map