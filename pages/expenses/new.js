// our-domain.com/expenses/new
import { Fragment } from 'react';
import BootstrapHead from "../../components/layout/BootstrapHead";
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
      <BootstrapHead
        title="Add a New Expense"
        description="Add your own expenses."
      ></BootstrapHead>
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </Fragment>
  );
}

export default NewExpensePage;
