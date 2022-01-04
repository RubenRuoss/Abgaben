import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

interface Event {
  _id?: mongo.ObjectId;
  interpret: string;
  price: number;
}

async function main(): Promise<void> {
  await mongoClient.connect();
  const db: mongo.Db = mongoClient.db("university");
  const eventCollection: mongo.Collection = db.collection("student");

  let newEvent: Event = {
    interpret: "Bruno Mars",
    price: 20
  };
  await eventCollection.insertOne(newEvent);
  let events: Event[] = <Event[]>(
    await eventCollection.find({ interpret: "Bruno Mars"}).toArray()
  );
  console.log(events);
  await mongoClient.close();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});