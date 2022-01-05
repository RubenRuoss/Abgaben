"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1"; // localhost
const port = 3000;
const mongoUrl = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFind(db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
async function dbAddOrEdit(db, collection, request) {
    let jsonString = "";
    request.on("data", data => {
        jsonString += data;
    });
    request.on("end", async () => {
        await mongoClient.connect();
        console.log(jsonString); // bei Fehlern zum Testen
        let event = JSON.parse(jsonString);
        if (event._id && event._id !== undefined) {
            event._id = new mongo.ObjectId(event._id);
            mongoClient.db(db).collection(collection).replaceOne({
                _id: event._id
            }, event);
        }
        else {
            event._id = undefined;
            mongoClient.db(db).collection(collection).insertOne(event);
        }
    });
}
async function main() {
    await mongoClient.connect();
    const db = mongoClient.db("db");
    const eventCollection = db.collection("Events");
    let newEvent = {
        interpret: "Bruno Mars",
        price: 20
    };
    await eventCollection.insertOne(newEvent);
    let events = (await eventCollection.find({ interpret: "Bruno Mars" }).toArray());
    console.log(events);
    await mongoClient.close();
}
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    // response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/concertEvents": {
            switch (request.method) {
                case "GET":
                    await dbFind("interpret", "price", {
                        interpret: url.searchParams.get("interpret")
                    }, response);
                    break;
                case "POST":
                    await dbAddOrEdit("db", "Events", request);
                    break;
            }
            break;
        }
        default:
            response.statusCode = 404;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map