import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
import { RootState } from "./store";
import logo from "./assets/logo.svg";
import "./theme/App.scss";
import Nav from "./components/Nav";

function App() {
  // const [count, setCount] = useState(0);
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
        {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}
        count is: {count}
        <br></br>
        <button type="button" onClick={() => dispatch(increment())}>
          add
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          remove
        </button>
      </p>
      {/* <Todos /> */}
    </div>
  );
}

export default App;
