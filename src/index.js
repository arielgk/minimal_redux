import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./components/App";
import Seasons from "./components/seasons/seasons";
import initialState from "./reducers/initialState";
import './index.css';

const store = configureStore(initialState);
render(
  <Provider store={store}>
    <Seasons />
  </Provider>,
  document.getElementById("root")
);
