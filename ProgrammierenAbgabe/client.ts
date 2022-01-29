namespace Anlegen {
    interface Gefriergut {
    mongoId?: string;
    name: string;
    menge?: number[];
    ablaufDatum?: Date[];
    anlegeDatum?: Date[];
    notiz?: string[];
    }

    let test: Gefriergut = {name: "Hallo", menge: [1]};
    console.log(test);

    const nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("gefriergutInput");
    const mengeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("mengeInput");
    const ablaufdatumInput: HTMLInputElement = <HTMLInputElement>document.getElementById("ablaufdatumInput");
    let aktuellesDate: Date = new Date();
    const notizInput: HTMLInputElement = <HTMLInputElement>document.getElementById("notizInput");

    let eingabe: HTMLFormElement = <HTMLFormElement>(
     document.getElementById("eingabe")
     );
    eingabe.addEventListener("submit", hinzufügen);

    async function hinzufügen(event: Event): Promise<void> {
        event.preventDefault();
        let gefriergut: Gefriergut =  {
            name: nameInput.value,
            menge: [Number(mengeInput.value)],
            ablaufDatum: [new Date(ablaufdatumInput.value)],
            anlegeDatum: [aktuellesDate],
            notiz: [notizInput.value]
        };
        console.log(gefriergut);
        post(gefriergut);
    }

    async function post(gefriergut: Gefriergut): Promise<void> {
        console.log(gefriergut);
        await fetch("http://localhost:3000/gefrierSchrank", {
          method: "POST",
          body: JSON.stringify(gefriergut)
        });
    }
}