import React from "react";
import { Metric } from "./Metric";

export const Metrics = (props) => {
  const totalFunction = (todos) => {
    return todos.length;
  };

  const doneFunction = (todos) => {
    let done = 0;
    todos.map((todo) => {
      if (todo.status === "on") {
        done++;
      }
    });
    return done;
  };

  const todoFunction = (todos) => {
    let todoElement = 0;
    todos.map((todo) => {
      if (todo.status === false) {
        todoElement++;
      }
    });
    return todoElement;
  };

  const highFunction = (todos) => {
    let highElement = 0;
    todos.map((todo) => {
      if (todo.priority === "high") {
        highElement++;
      }
    });
    return highElement;
  };

  const mediumFunction = (todos) => {
    let mediumElement = 0;
    todos.map((todo) => {
      if (todo.priority === "medium") {
        mediumElement++;
      }
    });
    return mediumElement;
  };

  const lowFunction = (todos) => {
    let lowElement = 0;
    todos.map((todo) => {
      if (todo.priority === "low") {
        lowElement++;
      }
    });
    return lowElement;
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Metric name="Total" value={totalFunction(props.todos)} />
      <Metric name="Done" value={doneFunction(props.todos)} />
      <Metric name="Todo" value={todoFunction(props.todos)} />
      <Metric name="High" value={highFunction(props.todos)} />
      <Metric name="Medium" value={mediumFunction(props.todos)} />
      <Metric name="Low" value={lowFunction(props.todos)} />
    </div>
  );
};
