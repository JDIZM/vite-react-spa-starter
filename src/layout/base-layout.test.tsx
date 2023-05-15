import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
// import Layout from "@/components/layout/base-layout";
import Layout from "./base-layout";
import React from "react";

const navLinks = [
  { path: "/", name: "home" },
  { path: "/todos", name: "todos" }
];

const props = {
  title: "some layout page title",
  links: navLinks,
  children: [<li key={1}>hello i&apos;m a child</li>, <li key={2}>hello i&apos;m a child</li>]
};

describe("Layout", () => {
  it("should render the component with props", () => {
    render(<Layout {...props} />);
    const header = screen.getAllByRole("banner");
    expect(header).toBeDefined();
    const nav = screen.getAllByRole("navigation");
    expect(nav).toBeDefined();
    const main = screen.getAllByRole("main");
    expect(main).toBeDefined();
    const footer = screen.getAllByRole("contentinfo");
    expect(footer).toBeDefined();
  });

  it("should have nav links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });

  it("should render child elements with text content", () => {
    const children = screen.getAllByRole("listitem");
    expect(children.length).toBe(2);
    expect(children[0].innerHTML).toMatch("hello i'm a child");
    expect(children[1].innerHTML).toMatch("hello i'm a child");
  });
});
