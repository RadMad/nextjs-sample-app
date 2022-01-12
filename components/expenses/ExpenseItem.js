import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './ExpenseItem.module.css';

function ExpenseItem(props) {
  const router = useRouter();

  function editDetailsHandler() {
    router.push('/expenses/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={editDetailsHandler}>Edit</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
