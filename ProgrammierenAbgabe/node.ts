import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1";
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017";
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

interface Gefriergut {
    mongoId: string;
    name: string;
    menge: number [];
    ablaufDatum: Date [];
    anlegeDatum: Date [];
    notiz: string [];
    }

async function dbFind(
    db: string,
    collection: string,
    requestObject: any,
    response: http.ServerResponse
  ): Promise <void> {
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

async function dbAddOrEdit(
    db: string,
    collection: string,
    request: http.IncomingMessage
    ): Promise<void> {
    let jsonString: string = "";
    request.on("data", data => {
            jsonString += data;
    });
    request.on("end", async () => {
        await mongoClient.connect();
        let gefriergut: any = JSON.parse(jsonString);
        console.log(gefriergut);
        if (gefriergut.name === await mongoClient.db(db).collection(collection).find({name: {$eq: gefriergut.name}})) {
            let übersetzen: string = JSON.stringify(mongoClient.db(db).collection(collection).find(request));
            let ausDb: Gefriergut = JSON.parse(übersetzen) as Gefriergut;
            ausDb.menge.push(gefriergut.menge);
            ausDb.ablaufDatum.push(gefriergut.ablaufDatum);
            ausDb.anlegeDatum.push(gefriergut.anlegeDatum);
            ausDb.notiz.push(gefriergut.notiz);
            mongoClient.db(db).collection(collection).updateOne({request}, {ausDb});
        }    
        else {
            mongoClient.db(db)
            .collection(collection)
            .insertOne(request);
        }
    });
}

const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
        response.statusCode = 200;
        response.setHeader("Access-Control-Allow-Origin", "*");
        let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

        switch (url.pathname) {
            case "/gefrierSchrank": {
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
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });