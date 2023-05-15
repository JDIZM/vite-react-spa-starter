import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counter";
import { RootState } from "../../store";
import logo from "@/assets/logo.svg";
import Layout from "../../layout/base-layout/base-layout";
import cx from "classnames";

function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout layout={"default"} className={cx("one", "two")}>
      <div className="container">
        <h2>Home Page</h2>
        <div>
          <img src={logo} alt="logo" />
          <p>Hello Vite + React!</p>
        </div>
        <p>
          count is: {count}
          <br></br>
          <button type="button" className="btn btn--primary mr--1 mt--1" onClick={() => dispatch(increment())}>
            add
          </button>
          <button type="button" className="btn btn--secondary" onClick={() => dispatch(decrement())}>
            remove
          </button>
        </p>
      </div>
    </Layout>
  );
}

export default Home;
