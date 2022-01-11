// our-domain.com/new-expense
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewExpenseForm from '../../components/expenses/NewExpenseForm';

function NewExpensePage() {
  const router = useRouter();

  async function addExpenseHandler(enteredExpenseData) {
    const response = await fetch('/api/new-expense', {
      method: 'POST',
      body: JSON.stringify(enteredExpenseData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/expenses');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Expense</title>
        <meta
          name='description'
          content='Add your own expenses.'
        />
      </Head>
      <NewExpenseForm onAddExpense={addExpenseHandler} />
    </Fragment>
  );
}

export default NewExpensePage;
