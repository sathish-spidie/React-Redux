import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducer from "./reducers";

const styles = {
  color: "grey",
  textTransform: "uppercase",
  fontFamily: "Courier New",
  fontSize: "40px"
};

function App() {
  return (
    <div style={styles}>
      hello
      {/* <div>store.getState()</div> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
