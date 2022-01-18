"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
    get();
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe = document.createElement("tr");
        output.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newDelete);
        let konzertEvent = {
            interpret: interpretValue,
            price: priceValue
        };
        post(konzertEvent);
    }
    async function post(konzertEvent) {
        console.log(konzertEvent);
        await fetch("http://localhost:3000/concertEvents", {
            method: "POST",
            body: JSON.stringify(konzertEvent)
        });
    }
    async function get() {
        let response = await fetch("http://localhost:3000/concertEvents", {
            method: "GET"
        });
        let text = await response.text();
        let konzerte = JSON.parse(text);
        for (let konzert of konzerte) {
            print(konzert);
        }
    }
    function print(konzertEvent) {
        let newInterpret = konzertEvent.interpret;
        let newPrice = konzertEvent.price;
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = newInterpret;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(newPrice);
        const newReihe = document.createElement("tr");
        output.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=client.js.map