import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
  const data = req.body;
  const client = await 
  MongoClient.connect(
    "mongodb+srv://bizsapp:bizmongo@cluster0.dkprbub.mongodb.net/?retryWrites=true&w=majority");
  const db = client.db();
  const contactformdata = db.collection("contactformdata");
  const result = await contactformdata.insertOne(data);
  console.log(result);
  client.close();
  res.status(201).json({ message: "Data inserted successfully!" });
  }
}