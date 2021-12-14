namespace Client{
    console.log("Client läuft neu");
const url: string = "http://127.0.0.1:3000"; // localhost
const path1: string = "/";
const path2: string = "/convertDate";
const eingabe: HTMLFormElement = <HTMLFormElement> document.getElementById("myForm");
const übergabeButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("übergabe");
übergabeButton.addEventListener("click", function(){
    console.log(eingabe);
    sendForm();
});
async function sendForm(): Promise<void> {
    let formData: FormData = new FormData(<HTMLFormElement>eingabe);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let urlWithQuery: string = url + path1 + "?" + query.toString();

    let response: Response = await fetch(urlWithQuery);
    let responseText: string = await response.text();
    console.log(responseText);
    let textAusgabe: HTMLElement = document.createElement("p");
    textAusgabe.textContent = responseText;
}
}