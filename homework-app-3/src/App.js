import "./App.css";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  return (
    <div className="container" data-theme="light">
      <article>
        <Form setTodos={setTodos} />
        <Filters todos={todos} setTodos={setTodos} />
        <TodoList
          todosToRender={todos}
          setTodos={setTodos}
          setTodoToEdit={setTodoToEdit}
        />
      </article>
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
