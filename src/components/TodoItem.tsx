import React from "react";

interface Todo {
  id: number;
  title: string;
}
interface TodoProps {
  todo: Todo;
  editingId: number;
  updatedInput: string;
  removeHandler: (todo: Todo) => void;
  editHandler: (editingId: number, updatedInput: string) => void;
  saveHandler: (todo: Todo, code: string) => void;
}

const styles = {
  padding: "0.5rem",
  margin: "0",
  listStyle: "none",
  cursor: "pointer",
  hover: ""
};

const buttonStyles = {
  cursor: "pointer",
  padding: "0.25rem 0.25rem",
  border: "1px solid black",
  borderRadius: "4px"
};

const Todo: React.FC<TodoProps> = ({
  todo,
  removeHandler,
  editHandler,
  saveHandler,
  editingId,
  updatedInput,
  ...props
}) => {
  // passing the todo prop to the clickHandler callback
  // console.log("rest", props);
  return (
    <li className="todo" key={todo.id} style={styles} {...props}>
      {editingId === todo.id && (
        <input
          type="text"
          onChange={(input) => editHandler(todo.id, input.target.value)}
          onKeyUp={({ code }) => {
            console.log("code", code);
            saveHandler(todo, code);
            // editHandler(todo, todo.id, input.target.value)
          }}
          name="updatedInput"
          value={updatedInput}
        />
      )}
      {editingId !== todo.id && (
        <span
          role="button"
          tabIndex={0}
          onClick={() => editHandler(todo.id, todo.title)}
          onKeyDown={() => {
            console.log("keydown");
          }}
        >
          {todo.id} - {todo.title}{" "}
        </span>
      )}
      <span
        role="button"
        tabIndex={0}
        style={buttonStyles}
        onClick={() => removeHandler(todo)}
        onKeyDown={() => {
          console.log("keydown");
        }}
      >
        x
      </span>
    </li>
  );
};

export default Todo;
