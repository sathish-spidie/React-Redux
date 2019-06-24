import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducer from "./reducers/combineReducers";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
