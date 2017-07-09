import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import App from "./page/App";
import store from "./page/store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
