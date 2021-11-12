// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 20;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Ruben`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Ruben
 * Ich esse gerne Pizza 
 * Ich gehörer zu Generation Z
*/

// -- [Aufgabe 2]

let events: any[][] = [
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
for(const entry of events){  //Mitschrift aus Praktikum 
  console.log(entry[0],entry[1]);
}
for (let index: number = 0; index < events.length; index++) {
  console.log(events[index]);
}
// Lösung c) ...
let höchsterTicketPreis: number = 0;
for (let i: number = 0; i < events.length; i++) {
  if (events[i][1] > höchsterTicketPreis) {
    höchsterTicketPreis = events[i][1];
  }
}
console.log(höchsterTicketPreis);
// Lösung d) ...
function checken (array: any[][], name: string): boolean {
  for (const entry of array) {
    if (entry[0].toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }  
  return false;
}
console.log(checken(events, "Mariah Carey"));

// Lösung e) ...
function factorial(n: number) { 
  let k: number = 1;  
  let i: number = 1;  
  while (i < n)  
           k = k * ++i ;  
  console.log(k);
 }
// Lösung f) ...
let durch3Teilbar: number[] = [];
for (let index = 0; index < 101; index++) {
  if (index % 3 == 0) {
    durch3Teilbar.push(index);
  }
}
console.log(durch3Teilbar);
console.log(`Es gibt ${durch3Teilbar.length} Zahlen zwischen 1 und 100 die durch drei Teilbar sind.`);
// Lösung g) ...
class ConcertEvent {
  private interpret: string;
  private price: number = 0;

  constructor(interpret: string, price: number) {
    this.interpret = interpret;
    this.price = price;
  }

  show(): string {
    return `Der Eintritt bei${this.interpret} kostet ${this.price}€.`;
  }
}
// Lösung h) ...
let concertEvents: ConcertEvent[] = [];
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

for (let index = 0; index < ConcertEvents.length; index++) {
  console.log(concertEvents[index].show());
}