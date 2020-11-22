import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// pages:
import { ChallengePage, HomePage, StreaksPage } from "../../pages";

// style:
import "./Nav.scss";

export const Nav = () => {
  return (
    <>
      <Router>
        <nav className="navigation">
          <ul className="navigation__items">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/StreaksPage">Streaks</Link>
            </li>
            <li>
              <Link to="/ChallengePage">Challenge</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/StreaksPage">
            <StreaksPage />
          </Route>

          <Route path="/ChallengePage">
            <ChallengePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
