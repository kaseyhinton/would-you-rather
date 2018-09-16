import { createStore, combineReducers } from "redux";
import app from "./reducers/app";

export const store = createStore(
  combineReducers({
    app
  }),
  { app: { user: 'Courtney'} },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
