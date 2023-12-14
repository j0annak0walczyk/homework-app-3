import React from "react";

export const TodoListItem = (props) => {
  const { todo, setTodos, setTodoToEdit } = props;
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.priority}</td>
      <td>
        <input type="checkbox" readOnly checked={todo.status}></input>
      </td>
      <td>
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={() => setTodoToEdit(todo)}>Edit</button>
          <button
            onClick={() => {
              setTodos((prevState) =>
                prevState.filter((todoToCheck) => todoToCheck.id !== todo.id)
              );
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
