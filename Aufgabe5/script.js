"use strict";
var EventTabelle;
(function (EventTabelle) {
    class Event {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        gibInterpret() {
            return this.interpret;
        }
        gibPrice() {
            return this.price;
        }
        show() {
            return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
        }
    }
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
    let eventsArray = [];
    let eventsArrayVonLocalStorage = [];
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const newDelete = document.createElement("button");
        newDelete.textContent = "Delete Event";
        newDelete.className = "deleteButton";
        newDelete.type = "submit";
        newDelete.addEventListener("click", deleteButtonHandler);
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe = document.createElement("tr");
        output.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newDelete);
        eventsArray.push(new Event(interpretValue, priceValue));
        function deleteButtonHandler() {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(newDelete);
        }
    }
    function tabelleFüllen(event) {
        let interpretValue = String(event.gibInterpret);
        let priceValue = Number(event.gibPrice);
        const newDelete = document.createElement("button");
        newDelete.textContent = "Delete Event";
        newDelete.className = "deleteButton";
        newDelete.type = "submit";
        newDelete.addEventListener("click", deleteButtonHandler);
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe = document.createElement("tr");
        output.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newDelete);
        eventsArray.push(new Event(interpretValue, priceValue));
        function deleteButtonHandler() {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(newDelete);
        }
    }
    let arrayString = JSON.stringify(eventsArray);
    localStorage.setItem("myArray", arrayString);
    let stringVomLocalStorage = localStorage.getItem("myArray");
    eventsArrayVonLocalStorage = JSON.parse(stringVomLocalStorage);
    for (let index = 0; index < eventsArrayVonLocalStorage.length; index++) {
        const element = eventsArrayVonLocalStorage[index];
        tabelleFüllen(element);
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map