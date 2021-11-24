namespace EventTabelle {

class Event {
    private interpret: string;
    private price: number;
    constructor(interpret: string, price: number) {
        this.interpret = interpret;
        this.price = price;
    }
    gibInterpret(): string {
        return this.interpret;
    }

    gibPrice(): number {
        return this.price;
    }

    show(): string {
        return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
    }
}
let eventsArrayVonLocalStorage: Event [] = [];
let stringVomLocalStorage: string = window.localStorage.getItem("myArray");
eventsArrayVonLocalStorage = JSON.parse(stringVomLocalStorage);
for (let index = 0; index < eventsArrayVonLocalStorage.length; index++) {
    let element: Event = eventsArrayVonLocalStorage[index];
    tabelleFüllen(element);
}

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
myButton.addEventListener("click", mybuttonHandler);

let eventsArray: Event [] = [];
let arrayString: string = JSON.stringify(eventsArray);
window.localStorage.setItem("myArray", arrayString);



function mybuttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);

    const newDelete: HTMLButtonElement = document.createElement("button");
    newDelete.textContent = "Delete Event";
    newDelete.style.color= "red";
    newDelete.className = "deleteButton";
    newDelete.type = "submit";
    newDelete.addEventListener("click", deleteButtonHandler);

    const newInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    newInterpretElement.textContent = interpretValue;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = String(priceValue);
    const newReihe: HTMLTableRowElement = document.createElement("tr"); 

    output.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement); 
    newReihe.appendChild(newDelete);

    eventsArray.push(new Event(interpretValue , priceValue));
    window.localStorage.setItem("myArray", arrayString);

    function deleteButtonHandler(): void {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(newDelete);
    }

}

function tabelleFüllen(event: Event): void {
    let interpretValue: string = String(event.gibInterpret);
    let priceValue: number = Number(event.gibPrice);
    
    const newDelete: HTMLButtonElement = document.createElement("button");
    newDelete.textContent = "Delete Event";
    newDelete.className = "deleteButton";
    newDelete.type = "submit";
    newDelete.addEventListener("click", deleteButtonHandler);

    const newInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    newInterpretElement.textContent = interpretValue;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = String(priceValue);
    const newReihe: HTMLTableRowElement = document.createElement("tr"); 

    output.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement); 
    newReihe.appendChild(newDelete);

    eventsArray.push(new Event(interpretValue , priceValue));

    function deleteButtonHandler(): void {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(newDelete);
    }

}

}