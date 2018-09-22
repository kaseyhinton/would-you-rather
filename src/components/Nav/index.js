import React from "react";
import { Link } from "react-router-dom";
import style from "./index.css";
import "@material/button/dist/mdc.button.css";
import { connect } from "react-redux";
import { Typography } from "@rmwc/typography";

class Nav extends React.Component {
  render() {
    const profileUrl =
      this.props && this.props.users && this.props.userId
        ? this.props.users.filter(user => user.id === this.props.userId)[0]
            .avatarURL
        : null;
    return (
      <nav className={style.nav}>
        <div className={style.navMaxWidth}>
        <Typography use="headline4" tag="h4">
          Would You Rather
        </Typography>
        {this.props.userId && (
          <div className={style.linksContainer}>
              <Link className={style.link} to="/">Home</Link>
              <Link className={style.link} to="/leaderboard">Leaderboard</Link>
            {
              <img
              className={style.img}
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={profileUrl}
              />
            }
          </div>
        )}
        </div>
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
