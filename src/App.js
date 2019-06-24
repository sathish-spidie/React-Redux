import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import "./action";
import { increment, decrement, logIn } from "./action";

const styles = {
  color: "grey",
  textTransform: "uppercase",
  fontFamily: "Courier New",
  fontSize: "20px"
};

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div style={styles}>
      <h4>counter {counter}</h4>
      <button onClick={() => dispatch(increment())}>add++</button>
      <br />
      <button onClick={() => dispatch(decrement())}>sub --</button>
      {isLogged ? <h4>you're logged in </h4> : <h4>Please Log in</h4>}
      <button onClick={() => dispatch(logIn())}>
        {isLogged ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default App;
