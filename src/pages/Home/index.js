import React from "react";
import { HMR } from "@pwa/preset-react";
import "@material/fab/dist/mdc.fab.css";
import style from "./index.css";

import { getQuestions } from "../../actions/questions";
import PollLink from "../../components/PollLink";
import { connect } from "react-redux";
import { Fab } from "@rmwc/fab";
import { Link } from "react-router-dom";
import { Tab, TabBar } from "@rmwc/tabs";

import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    if(this.props.user)
    return (
      <div className={style.home}>
        <div className={style.titles}>
          <h1>A Game Of Choices</h1>
          <h3>What Would You Rather?</h3>
          <TabBar
            activeTabIndex={this.state.activeTab}
            onActivate={evt => this.setState({activeTab: evt.detail.index})}
          >
            <Tab>Unanswered</Tab>
            <Tab>Answered</Tab>
          </TabBar>
          { this.state.activeTab === 0 && this.props.unansweredQuestions &&
            this.props.unansweredQuestions.map(question => (
              <PollLink
                key={question.id}
                userId={this.props.userId}
                users={this.props.users}
                question={question}
              />
            ))}

          {this.state.activeTab === 1 && this.props.answeredQuestions &&
            this.props.answeredQuestions.map(question => (
              <PollLink
                answered={true}
                key={question.id}
                userId={this.props.userId}
                users={this.props.users}
                question={question}
              />
            ))}
        </div>
        <Link to="/add">
          <Fab className={style.fab} icon="add" label="Add Question" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userId = state.app.user;
  const users = Object.values(state.users.users || {});
  const unansweredQuestions = [];
  const answeredQuestions = [];

  const questions = Object.values(state.questions.questions || {});
  const user = users.filter(o => o.id === userId)[0]
  questions.forEach(o => {
    if (user.answers[o.id]) answeredQuestions.push(o);
    else unansweredQuestions.push(o);
  });
  // Place newly created questions at the top of the list
  unansweredQuestions.reverse();
  return {
    unansweredQuestions,
    answeredQuestions,
    users,
    userId,
    user
  };
};

const mapDispatchToProps = {
  getQuestions
}

export default HMR(connect(mapStateToProps, mapDispatchToProps)(Home), module);
