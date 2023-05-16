import "@picocss/pico";

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";
import { Metrics } from "./components/Metrics";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const [filters, setFilters] = useState({
    title: "",
    status: "",
    priority: "",
  });

  const todosToDisplay = todos
    .filter(({ title }) => {
      return !filters.title || title.includes(filters.title);
    })
    .filter(({ status }) => {
      return (
        !filters.status ||
        (status && filters.status === "done") ||
        (!status && filters.status === "todo")
      );
    })
    .filter(({ priority }) => {
      return !filters.priority || priority === filters.priority;
    });

  return (
    <div className="container">
      <Form setTodos={setTodos} />
      <Filters filters={filters} setFilters={setFilters} />
      <Metrics todos={todos} />
      <TodoList
        todos={todosToDisplay}
        setTodos={setTodos}
        setTodoToEdit={setTodoToEdit}
      />
      {!!todoToEdit && (
        <EditModal
          todoToEdit={todoToEdit}
          setTodoToEdit={setTodoToEdit}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;
