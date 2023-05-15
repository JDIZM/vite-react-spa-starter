import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header
      style={{
        padding: "2rem 1rem",
        textAlign: "center"
      }}
    >
      <nav>
        <Link to="/">Counter</Link> | <Link to="/todos">Todos</Link> | <Link to="/example">Example</Link> |{" "}
        <Link to="/invoices">Invoices</Link>
      </nav>
    </header>
  );
}

export default Nav;
