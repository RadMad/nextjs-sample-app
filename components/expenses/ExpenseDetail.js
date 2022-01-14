import classes from './ExpenseDetail.module.css';

function ExpenseDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <p>{props.amount}</p>
      <p>{props.description}</p>
    </section>
  );
}

export default ExpenseDetail;
