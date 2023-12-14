import React from "react";
import { useState } from "react";

export const Form = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <article>
      <h3>Todo form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newTodo = {
            id: Math.random(),
            status: false,
            title,
            priority,
          };

          props.setTodos((prevState) => [...prevState, newTodo]);
          setTitle("");
          setPriority("");
        }}
      >
        <input
          required
          value={title}
          type="text"
          placeholder="Todo title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <select
          required
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
