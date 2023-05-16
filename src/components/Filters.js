import React from "react";

export const Filters = (props) => {
  const { filters, setFilters } = props;
  return (
    <article>
      <h2 style={{ marginBottom: 10 }}>Filters</h2>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <label>
          Title
          <input
            value={filters.title}
            onChange={(event) =>
              setFilters((prevState) => ({
                ...prevState,
                title: event.target.value,
              }))
            }
            type="text"
            placeholder="Enter title you search"
          />
        </label>

        <label>
          Priority
          <select
            value={filters.priority}
            onChange={(event) =>
              setFilters((prevState) => ({
                ...prevState,
                priority: event.target.value,
              }))
            }
          >
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Status
          <select
            value={filters.status}
            onChange={(event) =>
              setFilters((prevState) => ({
                ...prevState,
                status: event.target.value,
              }))
            }
          >
            <option value="">All</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>
        </label>
      </div>
    </article>
  );
};
