"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1";
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFind(db, collection, requestObject, response) {
    await mongoClient.connect();
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
        let gefriergut = JSON.parse(jsonString);
        console.log(gefriergut);
        if (gefriergut.name === await mongoClient.db(db).collection(collection).find({ name: { $eq: gefriergut.name } })) {
            let übersetzen = JSON.stringify(mongoClient.db(db).collection(collection).find(request));
            let ausDb = JSON.parse(übersetzen);
            ausDb.menge.push(gefriergut.menge);
            ausDb.ablaufDatum.push(gefriergut.ablaufDatum);
            ausDb.anlegeDatum.push(gefriergut.anlegeDatum);
            ausDb.notiz.push(gefriergut.notiz);
            mongoClient.db(db).collection(collection).updateOne({ request }, { ausDb });
        }
        else {
            mongoClient.db(db)
                .collection(collection)
                .insertOne(request);
        }
    });
}
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*");
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/concertEvents": {
            await mongoClient.connect();
            switch (request.method) {
                case "GET":
                    await dbFind("db", "Gefrierschrank", {}, response);
                    break;
                case "POST":
                    await dbAddOrEdit("db", "Gefrierschrank", request);
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
//# sourceMappingURL=node.js.map