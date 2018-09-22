import React from "react";
import style from "./index.css";
import "@material/card/dist/mdc.card.css";
import "@material/radio/dist/mdc.radio.css";
import "@material/button/dist/mdc.button.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/linear-progress/dist/mdc.linear-progress.css";

import { Typography } from "@rmwc/typography";
import { Card, CardAction, CardActions, CardMedia } from "@rmwc/card";
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
    const optionOneVotes = this.props.question.optionOne.votes.length;
    const optionTwoVotes = this.props.question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const questionOwner =
      this.props.users &&
      this.props.users.filter(
        user => user.id === this.props.question.author
      )[0];

    console.log(this.props);
    return (
      <div className={style.poll}>
        {!this.props.answered ? (
          <Card className={style.card}>
           <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url('${questionOwner.avatarURL}')`
              }}
            />
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
        ) : (
          <Card outlined className={style.card}>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url('${questionOwner.avatarURL}')`
              }}
            />
            <Typography use="headline3" tag="h3" style={{ paddingTop: 0 }}>
              {questionOwner.name}
            </Typography>
            <div className={style.resultsContainer}>
              <div className={style.result}>
                <Typography use="headline2" tag="h2">
                  {((optionOneVotes / totalVotes) * 100).toFixed(0)} %
                </Typography>
                <Typography use="headline4" tag="h4">
                  ({optionOneVotes} {optionOneVotes === 1 ? "Vote" : "Votes"})
                </Typography>
                <Typography
                  use="body1"
                  tag="p"
                  theme="text-secondary-on-background"
                >
                  Would rather {this.props.question.optionOne.text}
                  <br />
                </Typography>
              </div>
              <div className={style.result}>
                <Typography use="headline2" tag="h2">
                  {((optionTwoVotes / totalVotes) * 100).toFixed(0)} %
                </Typography>
                <Typography use="headline4" tag="h4">
                  ({optionTwoVotes} {optionTwoVotes === 1 ? "Vote" : "Votes"})
                </Typography>
                <Typography
                  use="body1"
                  tag="p"
                  theme="text-secondary-on-background"
                >
                  Would rather {this.props.question.optionTwo.text}
                  <br />
                </Typography>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  }
}
