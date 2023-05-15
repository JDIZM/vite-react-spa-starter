import React from "react";
import Nav from "@/components/Nav";
interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        padding: "1rem"
      }}
    >
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
