namespace EventTabelle {

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
myButton.addEventListener("click", myButtonHandler);
let events: Event [] = [];

class Event {
    interpret: string;
    price: number;
    constructor(interpret: string, price: number) {
        this.interpret = interpret;
        this.price = price;
    }
    set interpretName(name: string) {
        this.interpret = name;
    }
    get interpretName(): string {
        return this.interpret;
    }
    set priceZahl(price: number) {
        this.price = price;
    }
    get priceZahl(): number {
        return this.price;
    }
}
loadArray();
showArray(events);

function myButtonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);

    let event: Event = new Event(interpretValue, priceValue);
    events.push(event);
    console.log(events);

    let newTR: HTMLTableRowElement = document.createElement("tr");
    let newInterpret: HTMLTableCellElement = document.createElement("td");
    newInterpret.textContent = interpretValue;
    let newPrice: HTMLTableCellElement = document.createElement("td");
    newPrice.textContent = String(priceValue);
    let deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.addEventListener("click", function(): void {
        deleteEvent(newTR, event);
    });
    deleteButton.style.color = "red";
    deleteButton.textContent =  "Event Löschen";

    output.appendChild(newTR);
    newTR.appendChild(newInterpret);
    newTR.appendChild(newPrice);
    newTR.appendChild(deleteButton);
    storeArray();
}
function deleteEvent(parentElement: HTMLDivElement , event: Event): void {
    output.removeChild(parentElement);
    events.splice(events.indexOf(event) - 1 , 1);
    console.log(events);
    storeArray();
}
function storeArray(): void {
    let arrayString: string = JSON.stringify(events);
    localStorage.setItem("event", arrayString);
}
function loadArray(): void {
    let stringFromLocalStorage: string = localStorage.getItem("event");
    let arrayIGotFromStorage: Event [] = JSON.parse(stringFromLocalStorage);
    for (let event of arrayIGotFromStorage) {
        events[events.length] =  event;
    }
}
function showArray(aktuelleEvents: Array<Event>): void {
    for (let aktuellerEvent of aktuelleEvents) {
    let interpretValue: string = aktuellerEvent.interpret;
    let priceValue: number = aktuellerEvent.price;

    let newTR: HTMLTableRowElement = document.createElement("tr");
    let newInterpret: HTMLTableCellElement = document.createElement("td");
    newInterpret.textContent = interpretValue;
    let newPrice: HTMLTableCellElement = document.createElement("td");
    newPrice.textContent = String(priceValue);
    let deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.addEventListener("click", function(): void {
        deleteEvent(newTR, aktuellerEvent);
    });
    deleteButton.style.color = "red";
    deleteButton.textContent =  "Event Löschen";

    output.appendChild(newTR);
    newTR.appendChild(newInterpret);
    newTR.appendChild(newPrice);
    newTR.appendChild(deleteButton);
}
}
}