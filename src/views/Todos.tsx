import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import Todo from "../components/TodoItem";
import { getTodos } from "../data/todos";
import Layout from "../layout/Layout";

function Todos() {
  const [todos, setTodos] = useState(getTodos);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setIsEditingId] = useState(0);
  const [updatedInput, setUpdatedInput] = useState("");

  const addTodo = (
    input: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    code: string | null,
    todo: Todo
  ) => {
    if (code && code !== "Enter") return;
    if (!newTodo.length) return;
    setTodos([...todos, todo]);
    // reset edit state
    setIsEditingId(0);
  };

  const updateTodo = (editingId: number, updatedInput: string) => {
    setIsEditingId(editingId);
    setUpdatedInput(updatedInput);
  };

  const saveTodo = (todo: Todo, code: string) => {
    if (code !== "Enter") return;
    const updated = {
      ...todo,
      title: updatedInput
    };
    // keep index order of list
    const newTodos = [...todos];
    newTodos[todo.id - 1] = updated;
    setTodos(newTodos);
    setIsEditingId(0);
  };

  const removeTodo = (todo: Todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
    // reset edit state
    setIsEditingId(0);
  };

  const onInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(input.target.value);
    // there will be a delay when calling the state
    // use the useEffect hook to get an updated state with dependency
    console.log("onInput state", newTodo); // hell
    console.log("onInput target", input.target.value); // hello
  };

  useEffect(() => {
    // log out some updated state
    console.log("useEffect input", newTodo);
    console.log("todos", todos);
    console.log("todos.length", todos.length);
    console.log("editingId", editingId);
  }, [todos, newTodo, editingId]);

  return (
    <Layout>
      <div className="todos">
        <h1>Todo List</h1>
        {todos.length > 0 && (
          <TodoList>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                // handler passes a todo param
                removeHandler={(t) => removeTodo(t)}
                editHandler={updateTodo}
                editingId={editingId}
                updatedInput={updatedInput}
                saveHandler={saveTodo}
                // spreading additional props
                // example="example"
              />
            ))}
          </TodoList>
        )}
        <h2>Add some todo&apos;s</h2>
        <input
          type="text"
          onChange={(input) => onInput(input)}
          name="newTodo"
          value={newTodo}
          onKeyUp={({ code }) => {
            addTodo(null, code, {
              id: todos.length + 1,
              title: newTodo
            });
          }}
        />
        <button
          onClick={(e) => {
            addTodo(e, null, {
              id: todos.length + 1,
              title: newTodo
            });
          }}
        >
          add a todo
        </button>
      </div>
    </Layout>
  );
}

export default Todos;
