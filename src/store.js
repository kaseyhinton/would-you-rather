import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import app from "./reducers/app";
import users from "./reducers/users";

const INITIAL_STATE = {};

export const store = createStore(
  combineReducers({
    app,
    users
  }),
  INITIAL_STATE,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
