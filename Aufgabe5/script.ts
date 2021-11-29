namespace EventTabelle {

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
myButton.addEventListener("click", mybuttonHandler);

class Event {
    public interpret: string;
    public price: number;
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
    tabelleEintragen(event: Event): void {
        let interpretValue: string = String(event.gibInterpret);
        let priceValue: number = Number(event.gibPrice);
        
        const newDelete: HTMLButtonElement = document.createElement("button");
        newDelete.textContent = "Delete Event";
        newDelete.style.color = "red";
        newDelete.className = "deleteButton";
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
    
        //Events.storeEvent(new Event(interpretValue , priceValue));
    
        function deleteButtonHandler(): void {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(newDelete);
        }
    
    }

    show(): string {
        return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
    }
}

class Events {
    public static events: Event [] = [];
    static loadEvents(): void {
        let eventsJSON: string = localStorage.getItem("events");
        for (let event of JSON.parse(eventsJSON)) {
            this.events[this.events.length] = new Event(event.x , event.y);
        }
    }
    static tabelleFüllen(): void { 
        for (let event of this.events) {
            event.tabelleEintragen(event);
        }
    }
    static storeEvent(event: Event): void{
        this.events.push(event);
        this.events[this.events.length] = event;
        localStorage.setItem("events", JSON.stringify(this.events));
    }
}

Events.loadEvents();
Events.tabelleFüllen();

function mybuttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);

    const newDelete: HTMLButtonElement = document.createElement("button");
    newDelete.textContent = "Delete Event";
    newDelete.style.color = "red";
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

    Events.storeEvent(new Event(interpretValue , priceValue));

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

    Events.storeEvent(new Event(interpretValue , priceValue));

    function deleteButtonHandler(): void {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(newDelete);
    }

}

}