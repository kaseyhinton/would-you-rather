import React from "react";
import { Link } from "react-router-dom";
import style from "./index.css";
import "@material/button/dist/mdc.button.css";
import { Button } from "rmwc/button";
export default class Nav extends React.Component {
  render() {
    return (
      <nav className={style.nav}>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/leaderboard">Leaderboard</Link>
        </Button>
        <Button>
          <Link to="/profile">Profile</Link>
        </Button>
		<Button>
          <Link to="/login">Login</Link>
        </Button>
      </nav>
    );
  }
}
