"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 20;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Ruben`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Ruben
 * Ich esse gerne Pizza
 * Ich gehörer zu Generation Z
*/
// -- [Aufgabe 2]
let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.99],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// Lösung a) ...
console.log(`Das Array Events ist ${events.length} Einträge lang`);
// Lösung b) ...
for (const entry of events) { //Mitschrift aus Praktikum 
    console.log(entry[0], entry[1]);
}
for (let index = 0; index < events.length; index++) {
    console.log(events[index]);
}
// Lösung c) ...
let höchsterTicketPreis = 0;
for (let i = 0; i < events.length; i++) {
    if (events[i][1] > höchsterTicketPreis) {
        höchsterTicketPreis = events[i][1];
    }
}
console.log(höchsterTicketPreis);
// Lösung d) ...
function checken(array, name) {
    for (const entry of array) {
        if (entry[0].toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }
    return false;
}
console.log(checken(events, "Mariah Carey"));
// Lösung e) ...
function factorial(n) {
    let k = 1;
    let i = 1;
    while (i < n)
        k = k * ++i;
    console.log(k);
}
// Lösung f) ...
let durch3Teilbar = [];
for (let index = 0; index < 101; index++) {
    if (index % 3 == 0) {
        durch3Teilbar.push(index);
    }
}
console.log(durch3Teilbar);
console.log(`Es gibt ${durch3Teilbar.length} Zahlen zwischen 1 und 100 die durch drei Teilbar sind.`);
// Lösung g) ...
class ConcertEvent {
    interpret;
    price = 0;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    show() {
        return `Der Eintritt bei ${this.interpret} kostet ${this.price}€.`;
    }
}
// Lösung h) ...
let concertEvents = [];
concertEvents.push(new ConcertEvent(`Mark Knopfler`, 10.1));
concertEvents.push(new ConcertEvent("Pink Floyd", 15.9));
concertEvents.push(new ConcertEvent("Metallica", 20.1));
concertEvents.push(new ConcertEvent("Michael Bublé", 11.1));
concertEvents.push(new ConcertEvent("Dire Straits", 12.2));
concertEvents.push(new ConcertEvent("Mariah Carey", 1.1));
concertEvents.push(new ConcertEvent("Cat Stevens", 12.99));
concertEvents.push(new ConcertEvent("Mark Forster", 2.1));
concertEvents.push(new ConcertEvent("Helene Fischer", 3.1));
concertEvents.push(new ConcertEvent("Bee Gees", 25.2));
for (const entry of concertEvents) {
    console.log(entry.show());
}

//# sourceMappingURL=script_vorlage.js.map