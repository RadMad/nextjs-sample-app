import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./ExpenseItem.module.css";
import { useUser } from "@auth0/nextjs-auth0";

function ExpenseItem(props) {
  const { user } = useUser();
  const router = useRouter();

  function editDetailsHandler() {
    router.push("/expenses/" + props.id);
  }

  async function deleteHandler() {
    await fetch(`/api/expenses/${props.id}/`, {
      method: "DELETE",
      body: JSON.stringify({ user_email: user.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/expenses/");
  }

  return (
    <li className={classes.item}>
      <Card>
        {props.image && (
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
        )}
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <amount>{props.amount}</amount>
        </div>
        <div className={classes.actions}>
          <button onClick={editDetailsHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
