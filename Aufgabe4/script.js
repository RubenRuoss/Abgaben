"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const interpretSpalte = document.getElementById("interpretSpalte");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
    /*console.log(inputIntpret);
    console.log(inputPrice);
    */
    /*let eventListe: Events [];
    
    class Events {
        private interpret: string;
        private price: string;
    
        constructor(interpret: string, price: string, date: Date) {
            this.interpret = interpret;
            this.price = price;
        }
    }*/
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = inputPrice.value;
        let reiheZähler = 1;
        const newDelete = document.createElement("button");
        newDelete.textContent = "Delete Event";
        newDelete.className = "deleteButton";
        newDelete.type = "submit";
        newDelete.id = String(reiheZähler);
        newDelete.addEventListener("click", deleteButtonHandler);
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = priceValue;
        const newReihe = document.createElement("tr");
        newReihe.id = String(reiheZähler);
        reiheZähler++;
        output.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(newDelete);
    }
    function deleteButtonHandler() {
        // const reihe = document.getElementById());
    }
    /*let eventTabelleReiheHinzufügen: HTMLElement = document.createElement("tr");
    let eventTabelleEintragHinzufügen: HTMLElement = document.createElement("td");
    eventTabelleReiheHinzufügen.appendChild(eventTabelleEintragHinzufügen);
    eventTabelleEintragHinzufügen.textContent = "Events";
    document.getElementById("output").appendChild(eventTabelleReiheHinzufügen);*/
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map