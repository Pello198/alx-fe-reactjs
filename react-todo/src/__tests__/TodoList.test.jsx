
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Study ALX")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    fireEvent.change(screen.getByTestId("todo-input"), {
      target: { value: "New Task" },
    });

    fireEvent.click(screen.getByTestId("add-btn"));

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Study ALX");

    const deleteBtn = todo.querySelector("button");
    fireEvent.click(deleteBtn);

    expect(todo).not.toBeInTheDocument();
  });
});
