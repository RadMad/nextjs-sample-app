import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewExpenseForm.module.css';
import { useUser } from "@auth0/nextjs-auth0";

function NewExpenseForm(props) {
  console.log(props);
  const { user } = useUser();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      user_email: user.email
    };

    props.onAddExpense(expenseData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Expense Title</label>
          <input type='text' required id='title' ref={titleInputRef} defaultValue={props.expense?.title}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Expense Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} defaultValue={props.expense?.address}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            defaultValue={props.expense?.description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Expense</button>
        </div>
      </form>
    </Card>
  );
}

export default NewExpenseForm;
