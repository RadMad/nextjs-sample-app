// our-domain.com/expenses/[id]
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

import NewExpenseForm from "../../components/expenses/NewExpenseForm";

function EditExpensePage(props) {
  const router = useRouter();
  const { id } = router.query;

  async function editExpenseHandler(enteredExpenseData) {
    const response = await fetch(`/api/expenses/${id}/`, {
      method: "POST",
      body: JSON.stringify(enteredExpenseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/expenses");
  }

  return (
    <Fragment>
      <Head>
        <title>Edit Expense</title>
        <meta name="description" content="Edit your expense." />
      </Head>
      <NewExpenseForm
        onEditExpense={editExpenseHandler}
        expense={props.expense}
      />
    </Fragment>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const user = getSession(context.req).user;
    const { id } = context.query;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:Qdhe5J25S4E6LOm2@cluster0.y3ccv.mongodb.net/expenses?retryWrites=true&w=majority"
    );
    const db = client.db();

    const expensesCollection = db.collection("expenses");
    const expense = await expensesCollection.findOne({
      _id: ObjectId(id),
      user_email: user.email,
    });

    client.close();

    return {
      props: {
        expense: {
          title: expense.title,
          address: expense.address,
          image: expense.image,
          id: expense._id.toString(),
          description: expense.description,
        },
      },
    };
  },
});

export default EditExpensePage;
