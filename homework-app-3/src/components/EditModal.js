import React from "react";

export const EditModal = (props) => {
  return (
    <dialog open>
      <article>
        <h2>Edit todo</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.setTodos((prevState) =>
              prevState.map((todo) => {
                if (todo.id === props.todoToEdit.id) {
                  return props.todoToEdit;
                }
                return todo;
              })
            );
            props.setTodoToEdit(null);
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            value={props.todoToEdit.title}
            onChange={(e) =>
              props.setTodoToEdit((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            type="text"
            id="title"
          ></input>
          <label htmlFor="priority">Priority</label>
          <select
            value={props.todoToEdit.priority}
            id="priority"
            onChange={(e) =>
              props.setTodoToEdit((prevState) => ({
                ...prevState,
                priority: e.target.value,
              }))
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label htmlFor="status">Status</label>
          <input
            checked={props.todoToEdit.status}
            type="checkbox"
            id="status"
            onChange={(e) =>
              props.setTodoToEdit((prevState) => ({
                ...prevState,
                status: e.target.value,
              }))
            }
          />
          <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
            <button>Submit</button>
            <button onClick={() => props.setTodoToEdit(null)}>Cancel</button>
          </div>
        </form>
      </article>
    </dialog>
  );
};
