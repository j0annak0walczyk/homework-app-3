import React from "react";

export const Filters = (props) => {
  // const [titleFilter, setTitleFilter] = useState("");
  // const [priorityFilter, setPriorityFilter] = useState("");
  console.log(props.todos);
  return (
    <article>
      <form>
        <h2>Filters</h2>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title you search"
          onChange={(e) => {
            const newTodos = props.todos.filter((todo) => {
              // setTitleFilter(e.target.value);
              todo.title.includes(e.target.value);
            });
            props.setTodos(newTodos);
          }}
        ></input>
        <select
          onChange={(e) => {
            const newTodos = props.todos.filter(
              (todo) => todo.priority === e.target.value
            );
            props.setTodos(newTodos);
          }}
        >
          <option value="" hidden>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          onChange={(e) => {
            console.log(e.target.value);
            const newTodos = props.todos.filter(
              (todo) => todo.status === e.target.value
            );
            props.setTodos(newTodos);
          }}
        >
          <option value="" hidden>
            Status
          </option>
          <option value="on">Checked</option>
          <option value="false">Unchecked</option>
        </select>
      </form>
    </article>
  );
};
