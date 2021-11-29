"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
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
        tabelleEintragen(event) {
            let interpretValue = String(event.gibInterpret);
            let priceValue = Number(event.gibPrice);
            const newDelete = document.createElement("button");
            newDelete.textContent = "Delete Event";
            newDelete.style.color = "red";
            newDelete.className = "deleteButton";
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
            //Events.storeEvent(new Event(interpretValue , priceValue));
            function deleteButtonHandler() {
                newReihe.removeChild(newInterpretElement);
                newReihe.removeChild(newPriceElement);
                newReihe.removeChild(newDelete);
            }
        }
        show() {
            return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
        }
    }
    class Events {
        static events = [];
        static loadEvents() {
            let eventsJSON = localStorage.getItem("events");
            for (let event of JSON.parse(eventsJSON)) {
                this.events[this.events.length] = new Event(event.x, event.y);
            }
        }
        static tabelleFüllen() {
            for (let event of this.events) {
                event.tabelleEintragen(event);
            }
        }
        static storeEvent(event) {
            this.events.push(event);
            this.events[this.events.length] = event;
            localStorage.setItem("events", JSON.stringify(this.events));
        }
    }
    Events.loadEvents();
    Events.tabelleFüllen();
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const newDelete = document.createElement("button");
        newDelete.textContent = "Delete Event";
        newDelete.style.color = "red";
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
        Events.storeEvent(new Event(interpretValue, priceValue));
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
        Events.storeEvent(new Event(interpretValue, priceValue));
        function deleteButtonHandler() {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(newDelete);
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map