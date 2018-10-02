import React from "react";
import style from "./index.css";
import "@material/card/dist/mdc.card.css";
import "@material/radio/dist/mdc.radio.css";
import "@material/button/dist/mdc.button.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/linear-progress/dist/mdc.linear-progress.css";

import { Card, CardAction, CardActions, CardMedia } from "@rmwc/card";
import {  withRouter } from "react-router-dom";

class PollLink extends React.Component {
  handleSubmit() {
    this.props.history.push(`/questions/${this.props.question.id}`);
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

    return (
      <div className={style.poll}>
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
            {this.props.question.optionOne.text} or {this.props.question.optionTwo.text}
          </div>
          <CardActions className={style.cardActions}>
            <CardAction
              className={style.cardAction}
              onClick={this.handleSubmit.bind(this)}
            >
              VIEW POLL
            </CardAction>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withRouter(PollLink);
