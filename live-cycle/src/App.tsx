import { useEffect, useState } from "react";

type Todo = {
  completed: boolean;
  id: number;
  title: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const listTodos = (await response.json()) as Todo[];

    setTodos(listTodos);
  };

  const changeTodo = async (id: number) => {
    await fetch("http://localhost:3000/update/" + id, {
      method: "POST",
    });

    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            onChange={() => changeTodo(todo.id)}
            type="checkbox"
            checked={todo.completed}
          />
          {todo.title}
        </div>
      ))}
    </div>
  );
}

export default App;
