import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Layout, { LayoutProps } from "./base-layout";
import { MemoryRouter } from "react-router-dom";

const props: LayoutProps = {
  children: [<li key={1}>hello i&apos;m a child</li>, <li key={2}>hello i&apos;m a child</li>],
  layout: "default"
};

describe("Layout", () => {
  it("should render the component with props", () => {
    render(
      <MemoryRouter>
        <Layout {...props} />
      </MemoryRouter>
    );
    expect(screen.getByRole("navigation")).toBeDefined();
    expect(screen.getByRole("main")).toBeDefined();
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });

  it("should have nav links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
  });

  it("should render child elements with text content", () => {
    const children = screen.getAllByRole("listitem");
    expect(children.length).toBe(2);
    expect(children[0].innerHTML).toMatch("hello i'm a child");
    expect(children[1].innerHTML).toMatch("hello i'm a child");
  });
});
