import React from "react";
import { HMR } from "@pwa/preset-react";
import style from "./index.css";

import "@material/button/dist/mdc.button.css";
import "@material/card/dist/mdc.card.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/textfield/dist/mdc.textfield.css";

import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import { Card, CardActions } from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addQuestionAsync } from "../../actions/questions";
import { store } from "../../store";

class AddQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      optionOne: "",
      optionTwo: ""
    };
  }

  handleOptionOne = event => {
    this.setState({ optionOne: event.target.value });
  };

  handleOptionTwo = event => {
    this.setState({ optionTwo: event.target.value });
  };

  handleSaveQuestion = () => {
    const question = {
      author: this.props.userId,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    };
    store.dispatch(addQuestionAsync(question));
  };

  render() {
    return (
      <div className={style.login}>
        <Card
          style={{
            width: "100%",
            padding: "1rem"
          }}
        >
          <Typography className={style.header} use="headline2" tag="h2">
            Add Question
          </Typography>
          <Typography className={style.header} use="headline4" tag="h4">
            Would you rather?
          </Typography>
          <TextField onChange={this.handleOptionOne.bind(this)} outlined />
          <Typography className={style.header} use="headline4" tag="h4">
            Or
          </Typography>
          <TextField onChange={this.handleOptionTwo.bind(this)} outlined />

          <CardActions
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "0"
            }}
          >
            <Link to={!this.state.optionOne || !this.state.optionTwo ? '#' : '/'}>
              <Button
              className={style.saveButton}
                onClick={this.handleSaveQuestion.bind(this)}
                disabled={!this.state.optionOne || !this.state.optionTwo}
                outlined
              >
                SAVE
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
    userId: state.app.user
  };
};

export default HMR(connect(mapStateToProps)(AddQuestion), module);
