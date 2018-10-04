import React from "react";
import Loadable from "react-loadable";
import { HMR } from "@pwa/preset-react";
import { Route, withRouter, Switch } from "react-router-dom";
import Footer from "@components/Footer";
import style from "./index.css";
import Nav from "../Nav";

import { getUsers } from "../../actions/users";
import { getQuestions } from '../../actions/questions';
import { connect } from "react-redux";

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import("@pages/Home"));
const LeaderBoard = load(() => import("@pages/LeaderBoard"));
const Login = load(() => import("@pages/Login"));
const AddQuestion = load(() => import("@pages/AddQuestion"));
const NoMatch = load(() => import("@pages/NoMatch"));
const Question = load(() => import("@pages/Question"));

const PATHS = ["", "leaderboard", "add", "questions"];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      redirectTo: '/'
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      this.props.history.listen(obj => {
        if (window.ga) ga.send("pageview", { dp: obj.pathname });
      });
    }

    this.props.getUsers();
    this.props.getQuestions();

    if (PATHS.indexOf(this.props.history.location.pathname.split("/")[1] !== -1)) {
      this.setState({ redirectTo: this.props.history.location.pathname})
      this.props.history.push(`/login`);
    }
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div className={style.app}>
        <Nav />
        <main className={style.wrapper}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/login" exact component={() => <Login redirectTo={this.state.redirectTo} />} />
            <Route path="/add" exact component={AddQuestion} />
            <Route path="/questions/:question_id" component={Question} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUsers,
  getQuestions
}

export default HMR(withRouter(connect(null, mapDispatchToProps)(App)), module);
