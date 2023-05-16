import React from "react";
import { Metric } from "./Metric";

export const Metrics = ({ todos }) => {
  const total = todos.length;
  const doneAmount = todos.filter(({ status }) => status).length;
  const todoAmount = todos.filter(({ status }) => !status).length;
  const hightPriorityAmount = todos.filter(
    ({ priority }) => priority === "high"
  ).length;
  const mediumPriorityAmount = todos.filter(
    ({ priority }) => priority === "medium"
  ).length;
  const lowPriorityAmount = todos.filter(
    ({ priority }) => priority === "low"
  ).length;

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Metric label="Total" value={total} />
      <Metric label="Done" value={doneAmount} />
      <Metric label="Todo" value={todoAmount} />
      <Metric label="High" value={hightPriorityAmount} />
      <Metric label="Medium" value={mediumPriorityAmount} />
      <Metric label="Low" value={lowPriorityAmount} />
    </div>
  );
};
