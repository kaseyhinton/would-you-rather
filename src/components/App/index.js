import React from "react";
import Loadable from "react-loadable";
import { HMR } from "@pwa/preset-react";
import { Route, withRouter } from "react-router-dom";
import Footer from "@components/Footer";
import style from "./index.css";
import Nav from "../Nav";

import { store } from "../../store";
import { getUsers } from "../../actions/users";
import { getQuestions } from "../../actions/questions";

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import("@pages/Home"));
const Profile = load(() => import("@pages/Profile"));
const LeaderBoard = load(() => import("@pages/LeaderBoard"));
const Login = load(() => import("@pages/Login"));
const AddQuestion = load(() => import("@pages/AddQuestion"));

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      this.props.history.listen(obj => {
        if (window.ga) ga.send("pageview", { dp: obj.pathname });
      });
    }

    store.dispatch(getUsers());
    store.dispatch(getQuestions());
    this.props.history.push(`/login`);
  }

  render() {
    return (
      <div className={style.app}>
        <Nav />
        <main className={style.wrapper}>
          <Route path="/" exact component={Home} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={AddQuestion} />
          {/* <Route path="/blog/:title" component={ Article } /> */}
        </main>

        <Footer />
      </div>
    );
  }
}

export default HMR(withRouter(App), module);
