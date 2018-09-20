import React from "react";
import style from "./index.css";
import "@material/card/dist/mdc.card.css";
import "@material/radio/dist/mdc.radio.css";
import "@material/button/dist/mdc.button.css";
import "@material/form-field/dist/mdc.form-field.css";

import { Card, CardPrimaryAction, CardAction, CardActions } from "@rmwc/card";
import { Radio } from "@rmwc/radio";

import { answerQuestionAsync } from "../../actions/questions";
import { store } from "../../store";

export default class Poll extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleSubmit() {
    const answerDto = {
      authedUser: this.props.userId,
      qid: this.props.question.id,
      answer: this.state.value
    };
    store.dispatch(answerQuestionAsync(answerDto));
  }

  render() {
    return (
      <div className={style.poll}>
        <Card className={style.card}>
          <h2>{this.props.question.author}</h2>
          <div className={style.options}>
            <h3>Would you rather?</h3>
            <div />
            <Radio
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={event => this.setState({ value: event.target.value })}
            >
              {this.props.question.optionOne.text}
            </Radio>
            <Radio
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={event => this.setState({ value: event.target.value })}
            >
              {this.props.question.optionTwo.text}
            </Radio>
          </div>
          <CardActions className={style.cardActions}>
            <CardAction
              className={style.cardAction}
              onClick={this.handleSubmit.bind(this)}
            >
              SUBMIT
            </CardAction>
          </CardActions>
        </Card>
      </div>
    );
  }
}
