import ExpenseItem from './ExpenseItem';
import classes from './ExpenseList.module.css';

function ExpenseList(props) {
  return (
    <ul className={classes.list}>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          image={expense.image}
          title={expense.title}
          address={expense.address}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
