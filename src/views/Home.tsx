import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counter";
import { RootState } from "../store";
import logo from "@/assets/logo.svg";
import Layout from "../layout/base-layout";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout layout={"default"}>
      <h2>Home Page</h2>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </div>
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
    </Layout>
  );
}

export default App;
