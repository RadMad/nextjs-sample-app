// our-domain.com/expenses/new
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ExpenseForm from '../../components/expenses/ExpenseForm';

function NewExpensePage() {
  const router = useRouter();

  async function addExpenseHandler(enteredExpenseData) {
    const response = await fetch('/api/expenses/new', {
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
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </Fragment>
  );
}

export default NewExpensePage;
