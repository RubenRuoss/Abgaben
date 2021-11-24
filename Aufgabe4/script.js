"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpretInput");
    const inputPrice = document.getElementById("priceInput");
    const output = document.getElementById("output");
    const myButton = document.getElementById("enterButton");
    myButton.addEventListener("click", mybuttonHandler);
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
        function deleteButtonHandler() {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(newDelete);
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=script.js.map