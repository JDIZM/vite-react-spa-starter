import React from "react";
import Nav from "@/components/Nav";
import "./base-layout.scss";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  layout: "default" | "auth";
}

const Layout: React.FC<LayoutProps> = ({ children, layout }) => {
  return (
    <div className={layout}>
      <Nav />
      <main>{children}</main>
      <footer role="contentinfo">&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
