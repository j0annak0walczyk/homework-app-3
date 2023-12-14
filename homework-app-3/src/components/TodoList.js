import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props) => {
  return (
    <article>
      <h3>Todo list</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.todosToRender.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                setTodos={props.setTodos}
                setTodoToEdit={props.setTodoToEdit}
              />
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
