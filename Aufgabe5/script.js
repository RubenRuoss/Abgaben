"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", myButtonHandler);
    let events = [];
    class Event {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        set interpretName(name) {
            this.interpret = name;
        }
        get interpretName() {
            return this.interpret;
        }
        set priceZahl(price) {
            this.price = price;
        }
        get priceZahl() {
            return this.price;
        }
    }
    loadArray();
    showArray(events);
    function myButtonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let event = new Event(interpretValue, priceValue);
        events.push(event);
        console.log(events);
        let newTR = document.createElement("tr");
        let newInterpret = document.createElement("td");
        newInterpret.textContent = interpretValue;
        let newPrice = document.createElement("td");
        newPrice.textContent = String(priceValue);
        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", function () {
            deleteEvent(newTR, event);
        });
        deleteButton.style.color = "red";
        deleteButton.textContent = "Event Löschen";
        output.appendChild(newTR);
        newTR.appendChild(newInterpret);
        newTR.appendChild(newPrice);
        newTR.appendChild(deleteButton);
        storeArray();
    }
    function deleteEvent(parentElement, event) {
        output.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
        storeArray();
    }
    function storeArray() {
        let arrayString = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function loadArray() {
        let stringFromLocalStorage = localStorage.getItem("event");
        let arrayIGotFromStorage = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] = event;
        }
    }
    function showArray(aktuelleEvents) {
        for (let aktuellerEvent of aktuelleEvents) {
            let interpretValue = aktuellerEvent.interpret;
            let priceValue = aktuellerEvent.price;
            let newTR = document.createElement("tr");
            let newInterpret = document.createElement("td");
            newInterpret.textContent = interpretValue;
            let newPrice = document.createElement("td");
            newPrice.textContent = String(priceValue);
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", function () {
                deleteEvent(newTR, aktuellerEvent);
            });
            deleteButton.style.color = "red";
            deleteButton.textContent = "Event Löschen";
            output.appendChild(newTR);
            newTR.appendChild(newInterpret);
            newTR.appendChild(newPrice);
            newTR.appendChild(deleteButton);
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map