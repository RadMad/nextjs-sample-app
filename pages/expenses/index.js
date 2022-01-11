import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import ExpenseList from '../../components/expenses/ExpenseList';

function ExpensesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Expenses</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React expenses!'
        />
      </Head>
      <ExpenseList expenses={props.expenses} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       expenses: DUMMY_MEETUPS
//     }
//   };
// }

export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority'
  );
  const db = client.db();

  const expensesCollection = db.collection('expenses');

  const expenses = await expensesCollection.find().toArray();

  client.close();

  return {
    props: {
      expenses: expenses.map((expense) => ({
        title: expense.title,
        address: expense.address,
        image: expense.image,
        id: expense._id.toString(),
      })),
    },
  };
}

export default ExpensesPage;
