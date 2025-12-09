import React from "react";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Study ALX", completed: true },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      <AddTodoForm onAdd={addTodo} />

      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            onClick={() => toggleTodo(t.id)}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            data-testid="todo-item"
          >
            {t.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(t.id);
              }}
              data-testid="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
