import { Fragment } from "react";
import BootstrapHead from "../../components/layout/BootstrapHead";
import { MongoClient } from "mongodb";

import ExpenseList from "../../components/expenses/ExpenseList";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

function ExpensesPage(props) {
  return (
    <Fragment>
      <BootstrapHead
        title="React Expenses"
        description="Browse a huge list of highly active React expenses!"
      ></BootstrapHead>
      <ExpenseList expenses={props.expenses} />;
    </Fragment>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const user = getSession(context.req).user;
    const client = await MongoClient.connect(
      "mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority"
    );
    const db = client.db();

    const expensesCollection = db.collection("expenses");

    const expenses = await expensesCollection
      .find({ user_email: user.email })
      .toArray();

    client.close();

    return {
      props: {
        expenses: expenses.map((expense) => ({
          title: expense.title,
          amount: expense.amount,
          image: expense.image,
          id: expense._id.toString(),
        })),
      },
    };
  },
});

export default ExpensesPage;
