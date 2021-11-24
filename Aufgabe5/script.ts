namespace EventTabelle {

class Event {
    private interpret: string;
    private price: number;
    constructor(interpret: string, price: number) {
        this.interpret = interpret;
        this.price = price;
    }
    gibInterpret():string{
        return this.interpret;
    }

    gibPrice(): number{
        return this.price;
    }

    show(): string{
        return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
    }
}


const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
myButton.addEventListener("click", mybuttonHandler);
let eventsArray: Event [] = [];
let eventsArrayVonLocalStorage: Event [] = [];

function mybuttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);
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

let arrayString: string = JSON.stringify(eventsArray);
localStorage.setItem("myArray", arrayString);
let stringVomLocalStorage: string = localStorage.getItem("myArray");
eventsArrayVonLocalStorage = JSON.parse(stringVomLocalStorage);

for (let index = 0; index < eventsArrayVonLocalStorage.length; index++) {
    const element = eventsArrayVonLocalStorage[index];
    tabelleFüllen(element);
}
}