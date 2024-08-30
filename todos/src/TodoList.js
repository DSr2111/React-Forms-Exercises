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

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));
}
