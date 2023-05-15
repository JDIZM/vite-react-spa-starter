import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const TodoList: React.FC<Props> = ({ children }) => {
  return (
    <ul
      style={{
        padding: "0"
      }}
    >
      {children}
    </ul>
  );
};

export default TodoList;
