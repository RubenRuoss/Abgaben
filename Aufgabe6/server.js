"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1"; //localhost
const port = 3000; //Port, auf dem der Server laufen soll
console.log("Server an");
const server = http.createServer((request, response) => {
    // Serverkonfigurationsfunktion
    /*
          Die Konfigurationsfunktion hat immer zwei Parameter.
          Einmal besitzt Sie das Request-Objekt mit der eingehenden Anfrage
          und das Response-Objekt, welches zum Handhaben der Server-Antwort dient
          */
    response.statusCode = 200; //hier wird der Status definiert: 200 heißt alles ist in Ordnung
    // Nun können wir noch Header für die Rückgabe Definieren
    response.setHeader("Content-Type", "text/plain"); //Hier Definieren wir den Rückgabetyp
    response.setHeader("Access-Control-Allow-Origin", "*"); //Dieser Header Definiert, ob der Response-Header mit de, Herkunftsort der Anfrage geteilt werden kann
    // "*" heißt der Header kann mit jedem geteilt werden. Das ist wichtig um später mögliche CORS-Fehlermeldungen zu vermeiden
    //Routing der verschiedenen Pfade
    //_________
    let url = new URL(request.url || "", `http://${request.headers.host}`); //Für das Routing definieren wir zunächst ein URL-Objekt
    // Nun Regeln wir mit einemm Switch-Case welcher Pfad, wie verarbeitet werden soll
    switch (url.pathname) {
        case "/": //Root-Pfad
            response.write("Server erreichbar");
            break;
        case "/convertDate": //Spezifischer Pfad 
            let date = url.searchParams.get("date"); //Auslesen eines Get-Parameters "name"
            console.log(date); // Ausgabe der Angekommenen get-Parameters in der Server-Konsole
            const dateArray = date.split("-", 3);
            let dateYear = dateArray[0];
            let dateMonth = dateArray[1];
            let dateDay = dateArray[2];
            response.write("Du hast den Tag: " + dateDay + " Monat: " + dateMonth + " Jahr: " + dateYear + " angegeben"); //Definieren der Rückgabe mit der name-Variable
            break;
        default:
            response.statusCode = 404; // Wenn der Pfad nicht gefunden wurde, wollen wir eine 404-Fehlermeldung zurückgeben
    }
    response.end(); //Abschließen und absenden der Server-Antwort
});
/*
Der Server muss noch wissen, über welchen Hostnamen und über welchen Port er auf Anfragen lauschen soll.
Das wird hier definiert:
*/
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); //Wenn der Server erreichbar ist, soll folgendes ausgegeben werden.
});
//# sourceMappingURL=server.js.map