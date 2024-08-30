import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  const update = (id, updatedTask) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : undo
      )
    );
  };
}
