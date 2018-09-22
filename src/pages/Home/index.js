import React from "react";
import { HMR } from "@pwa/preset-react";
import style from "./index.css";
import { getQuestions } from "../../actions/questions";
import { getUsers } from "../../actions/users";
import { store } from "../../store";
import Poll from "../../components/Poll";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    store.dispatch(getQuestions());
    store.dispatch(getUsers());
  }

  static getDerivedStateFromProps(props, state) {
    const user = props.users.filter(o => o.id === props.userId)[0];

    if (!user) return {};

    const unansweredQuestions = [];
    const answeredQuestions = [];

    props.questions.forEach(o => {
      if (user.answers[o.id]) answeredQuestions.push(o);
      else unansweredQuestions.push(o);
    });

    return {
      user,
      answeredQuestions,
      unansweredQuestions
    };
  }

  render() {
    return (
      <div className={style.home}>
        <div className={style.titles}>
          <h1>A Game Of Choices</h1>
          <h3>What Would You Rather?</h3>

          <h4>Unanswered Questions</h4>
          {this.state.unansweredQuestions &&
            this.state.unansweredQuestions.map(question => (
              <Poll key={question.id} userId={this.props.userId} question={question} />
            ))}

          <h4>Answered Questions</h4>
          {this.state.answeredQuestions &&
            this.state.answeredQuestions.map(question => (
              <Poll answered={true} key={question.id} userId={this.props.userId} question={question} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions.questions || {}),
    users: Object.values(state.users.users || {}),
    userId: state.app.user
  };
};

export default HMR(connect(mapStateToProps)(Home), module);
