import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{
        padding: "2rem 1rem",
        textAlign: "center"
      }}
    >
      <Link to="/">Home</Link> | <Link to="/photos">Photos</Link> | <Link to="/example">Example</Link> |{" "}
      <Link to="/example">Example</Link>
    </nav>
  );
}

export default Nav;
