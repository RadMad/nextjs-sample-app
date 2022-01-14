import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./ExpenseForm.module.css";
import { useUser } from "@auth0/nextjs-auth0";

function ExpenseForm(props) {
  const { user } = useUser();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      image: enteredImage,
      amount: enteredAmount,
      description: enteredDescription,
      user_email: user.email,
    };

    props.expense?.id
      ? props.onEditExpense(expenseData)
      : props.onAddExpense(expenseData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Expense Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            defaultValue={props.expense?.title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Expense Image</label>
          <input
            type="url"            
            id="image"
            ref={imageInputRef}
            defaultValue={props.expense?.image}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            required
            id="amount"
            ref={amountInputRef}
            defaultValue={props.expense?.amount}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
            defaultValue={props.expense?.description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>{props.expense?.id ? `Save` : `Add`} Expense</button>
        </div>
      </form>
    </Card>
  );
}

export default ExpenseForm;
