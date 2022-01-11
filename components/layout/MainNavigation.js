import Link from "next/link";

import classes from "./MainNavigation.module.css";
import { useUser } from "@auth0/nextjs-auth0";

function MainNavigation() {
  /* eslint-disable @next/next/no-html-link-for-pages*/
  const { user, isLoading } = useUser();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link href="/expenses">All Expenses</Link>
          </li>
          <li>
            <Link href="/new-expense">Add New Expense</Link>
          </li>
          <li>{!isLoading && !user && <a href="/api/auth/login">Log in</a>}</li>
          <li>{user && <span>{user.name}</span>}</li>
          <li>{user && <a href="/api/auth/logout">Log out</a>}</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
