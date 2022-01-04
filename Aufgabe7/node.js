"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
const hostname = "127.0.0.1"; // localhost
const port = 3000;
const mongoUrl = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient = new mongo.MongoClient(mongoUrl);
async function main() {
    await mongoClient.connect();
    const db = mongoClient.db("university");
    const eventCollection = db.collection("student");
    let newEvent = {
        interpret: "Bruno Mars",
        price: 20,
    };
    await eventCollection.insertOne(newEvent);
    let events = (await eventCollection.find({ interpret: "Bruno Mars" }).toArray());
    console.log(events);
    await mongoClient.close();
}
main();
//# sourceMappingURL=node.js.map