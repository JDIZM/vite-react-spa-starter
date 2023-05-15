import React from "react";
import Nav from "@/components/nav/nav-primary";
import "./base-layout.scss";
import cx from "classnames";

export interface LayoutProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  layout: "default" | "auth";
}

const Layout: React.FC<LayoutProps> = ({ children, layout, className }) => {
  return (
    <div className={cx(layout, className)}>
      <Nav />
      <main>{children}</main>
      <footer role="contentinfo">&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
