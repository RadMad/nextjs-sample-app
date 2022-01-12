import { MongoClient, ObjectId } from "mongodb";

// /api/expenses/[id]
// POST /api/expenses/[id]

async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority"
    );
    const db = client.db();
    const expensesCollection = db.collection("expenses");
    const data = req.body;
    const result = await expensesCollection.replaceOne(
      { _id: ObjectId(req.query) },
      data
    );

    console.log(result);

    client.close();

    res.status(201).json({ message: "Expense updated!" });
  } else if (req.method === "DELETE") {
    const client = await MongoClient.connect(
      "mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority"
    );
    const db = client.db();
    const expensesCollection = db.collection("expenses");
    const data = req.body;
    const result = await expensesCollection.deleteOne(
      { _id: ObjectId(req.query) },
      data
    );

    console.log(result);

    client.close();

    res.status(201).json({ message: "Expense deleted!" });
  }
}

export default handler;
