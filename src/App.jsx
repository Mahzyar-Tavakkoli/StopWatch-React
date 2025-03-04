import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.rtl.min.css";
import AddTodo from "./Add";
import Todos from "./Todos";
import { TodosContext } from "./TodosContext";

function App() {
  const [TodoArray, setTodos] = useState(
    [
    // {
    //   id: 2,
    //   value: "hello",
    //   isComplet: true,
    // },
    // {
    //   id: 5,
    //   value: "pak",
    //   isComplet: false,
    // },
    // {
    //   id: 3,
    //   value: "mos",
    //   isComplet: true,
    // },
  ]
);
  return (
    <TodosContext.Provider
      value={{
        TodoArray,
        setTodos,
      }}
    >
      <div className="pt-4">
        <div className="container">
          <h1 className="text-center display-1 text-muted mb-4">لیست وظایف</h1>
          <AddTodo />

          <Todos />
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
