import { MongoClient } from 'mongodb';

// /api/new-expense
// POST /api/new-expense

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority'
    );
    const db = client.db();

    const expensesCollection = db.collection('expenses');

    const result = await expensesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Expense inserted!' });
  }
}

export default handler;
