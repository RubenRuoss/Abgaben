namespace EventTabelle {

const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpretInput");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("priceInput"); 
const output: HTMLElement = <HTMLElement>document.getElementById("output"); 
const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterButton");
myButton.addEventListener("click", mybuttonHandler);

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

    function deleteButtonHandler(): void {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(newDelete);
    }
}
async function sendJSONStringWithPOST(
    url: RequestInfo,
    jsonString: string
  ): Promise<void> {
    await fetch(url, { method: "post", body: jsonString });
  }
  
    sendJSONStringWithPOST(
    "http://localhost:3000/conertEvents",
    JSON.stringify({
      interpret: inputIntpret.value ,
      price: inputPrice.value,
      
    })
  );
}