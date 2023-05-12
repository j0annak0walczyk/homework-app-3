import "@picocss/pico";

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { EditModal } from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  return (
    <div className="container">
      <Form setTodos={setTodos} />
      <TodoList
        todos={todos}
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
