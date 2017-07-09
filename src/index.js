import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import App from "./pages/App";
import store from "./pages/store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
