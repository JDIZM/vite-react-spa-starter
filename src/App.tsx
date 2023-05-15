import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
import { RootState } from "./store";
import logo from "./assets/logo.svg";
import Nav from "./components/nav/nav-primary";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        <p>Hello Vite + React!</p>
      </header>
      <p>
        count is: {count}
        <br></br>
        <button type="button" onClick={() => dispatch(increment())}>
          add
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          remove
        </button>
      </p>
    </div>
  );
}

export default App;
