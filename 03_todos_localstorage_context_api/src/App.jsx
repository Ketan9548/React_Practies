import { useEffect, useState } from "react";
import { Todoprovider } from './Context';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const ToggleComplete = (id) => {
    setTodos((pre) =>
      pre.map((pretodo) =>
        pretodo.id === id ? { ...pretodo, check: !pretodo.check } : pretodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, ToggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">
            Manage Your Todo
          </h1>
          <div className="mb-4">
            <p>todos</p>
          </div>
          <div className="flex flex-wrap gap-y-3">
            <p>loop</p>
          </div>
        </div>
      </div>
      <p>kapil</p>
    </Todoprovider>
  );
}

export default App;
