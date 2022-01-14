import Link from "next/link";

import classes from "./MainNavigation.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { Fragment } from "react";

function MainNavigation() {
  /* eslint-disable @next/next/no-html-link-for-pages*/
  const { user, isLoading } = useUser();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link href="/">
            <a className="nav-link px-2 link-secondary">All Meetups</a>
          </Link>
        </li>
        <li>
          <Link href="/new-meetup">
            <a className="nav-link px-2 link-secondary">Add New Meetup</a>
          </Link>
        </li>
        {user && (
          <Fragment>
            <li>
              <Link href="/expenses">
                <a className="nav-link px-2 link-secondary">All Expenses</a>
              </Link>
            </li>
            <li>
              <Link href="/expenses/new">
                <a className="nav-link px-2 link-secondary">Add New Expense</a>
              </Link>
            </li>
          </Fragment>
        )}
      </ul>

      <div className="col-md-3 text-end">
        {!isLoading && !user && (
          <a href="/api/auth/login" className="btn btn-outline-primary me-2">
            Login
          </a>
        )}
        {user && (
          <Fragment>
            <span className="me-2">{user.name}</span>
            <a
              href="/api/auth/logout"
              className="btn btn-outline-secondary me-2"
            >
              Log out
            </a>
          </Fragment>
        )}
      </div>
    </header>

    /*<header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          {user && (
            <Fragment>
              <li>
                <Link href="/expenses">All Expenses</Link>
              </li>
              <li>
                <Link href="/expenses/new">Add New Expense</Link>
              </li>
            </Fragment>
          )}
          <li>{!isLoading && !user && <a href="/api/auth/login">Log in</a>}</li>
          <li>{user && <span>{user.name}</span>}</li>
          <li>{user && <a href="/api/auth/logout">Log out</a>}</li>
        </ul>
      </nav>
    </header>*/
  );
}

export default MainNavigation;
