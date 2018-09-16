import React from "react";
import ReactDOM from "react-dom";
import GAnalytics from "ganalytics";
import { BrowserRouter } from "react-router-dom";
import App from "@components/App";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "production") {
  window.ga = new GAnalytics("UA-XXXXXXXX-X");

  // Additional production-specific code...
}
