"use strict";
var Anlegen;
(function (Anlegen) {
    let test = { name: "Hallo", menge: [1] };
    console.log(test);
    const nameInput = document.getElementById("gefriergutInput");
    const mengeInput = document.getElementById("mengeInput");
    const ablaufdatumInput = document.getElementById("ablaufdatumInput");
    let aktuellesDate = new Date();
    const notizInput = document.getElementById("notizInput");
    let eingabe = (document.getElementById("eingabe"));
    eingabe.addEventListener("submit", hinzufügen);
    async function hinzufügen(event) {
        event.preventDefault();
        let gefriergut = {
            name: nameInput.value,
            menge: [Number(mengeInput.value)],
            ablaufDatum: [new Date(ablaufdatumInput.value)],
            anlegeDatum: [aktuellesDate],
            notiz: [notizInput.value]
        };
        console.log(gefriergut);
        post(gefriergut);
    }
    async function post(gefriergut) {
        console.log(gefriergut);
        await fetch("http://localhost:3000/gefrierSchrank", {
            method: "POST",
            body: JSON.stringify(gefriergut)
        });
    }
})(Anlegen || (Anlegen = {}));
//# sourceMappingURL=client.js.map