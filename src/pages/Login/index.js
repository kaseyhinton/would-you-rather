import React from "react";
import { HMR } from "@pwa/preset-react";
import style from "./index.css";

import "@material/button/dist/mdc.button.css";
import "@material/shape/dist/mdc.shape.css";
import "@material/card/dist/mdc.card.css";
import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

import { Button } from "@rmwc/button";
import { Card, CardActions } from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Select } from "@rmwc/select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../../actions/app";
import { store } from "../../store";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginEnabled: false
    };
  }

  handleAccountSelect = event => {
    const selected = event.target.value;
    store.dispatch(loginUserAction(selected));
    this.setState({ loginEnabled: true });
  };

  render() {
    const usersFromProps =
      this.props && this.props.users && this.props.users.users
        ? Object.values(this.props.users.users)
        : [];
    const users = usersFromProps.map(user => user.id);
    return (
      <div className={style.login}>
        <Card
          style={{
            width: "100%",
            padding: "1rem"
          }}
        >
          <Typography className={style.header} use="headline2" tag="h2">
            Select An Account
          </Typography>
          <Select
            label="Account"
            outlined
            placeholder=""
            disabled={users.length < 1}
            className={style.select}
            options={users}
            onChange={this.handleAccountSelect.bind(this)}
          />
          <CardActions
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "0 1rem"
            }}
          >
            <Link to={this.state.loginEnabled ? "/" : "#"}>
              <Button disabled={!this.state.loginEnabled} outlined>
                LOGIN
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default HMR(connect(mapStateToProps)(Login), module);
