namespace EventTabelle {

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const interpretSpalte: HTMLButtonElement = <HTMLButtonElement>document.getElementById("interpretSpalte");
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
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

function mybuttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: string = inputPrice.value;
    let reiheZähler: number = 1;
    const newDelete: HTMLButtonElement = document.createElement("button");
    newDelete.textContent = "Delete Event";
    newDelete.className = "deleteButton";
    newDelete.type = "submit";
    newDelete.id = String(reiheZähler);
    newDelete.addEventListener("click", deleteButtonHandler);

    const newInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    newInterpretElement.textContent = interpretValue;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = priceValue;
    const newReihe: HTMLTableRowElement = document.createElement("tr"); 
    newReihe.id = String(reiheZähler); 
    reiheZähler++;
    output.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement); 
    newReihe.appendChild(newDelete);
    function deleteButtonHandler(): void {
        delete(document.getElementById(String(reiheZähler)));
     }
}


/*let eventTabelleReiheHinzufügen: HTMLElement = document.createElement("tr");
let eventTabelleEintragHinzufügen: HTMLElement = document.createElement("td");
eventTabelleReiheHinzufügen.appendChild(eventTabelleEintragHinzufügen);
eventTabelleEintragHinzufügen.textContent = "Events";
document.getElementById("output").appendChild(eventTabelleReiheHinzufügen);*/

}