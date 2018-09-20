import React from "react";
import { Link } from "react-router-dom";
import style from "./index.css";
import "@material/button/dist/mdc.button.css";
import { Button } from "rmwc/button";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    const profileUrl =
      this.props &&
      this.props.users &&
      this.props.userId
        ? this.props.users.filter(
            user => user.id === this.props.userId
          )[0].avatarURL
        : null;
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
        <Button>
          <Link to="/add">Add</Link>
        </Button>
        {
          <img
            style={{ borderRadius: "50%", height: "40px", width: "40px" }}
            src={profileUrl}
          />
        }
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: Object.values(state.users.users || {}),
    userId: state.app.user
  };
};

export default connect(mapStateToProps)(Nav);
