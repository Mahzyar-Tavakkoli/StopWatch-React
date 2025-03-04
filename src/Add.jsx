import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.rtl.min.css";
import { TodosContext } from "./TodosContext";

function AddTodo() {
  const TodosArray = useContext(TodosContext);

  const HandleAddTodo = () => {
    const newvalue = document.querySelector(".AddInput").value;

    if (newvalue) {
      const randID = Math.random();
      document.querySelector(".AddInput").value = "";
      const newObject = { id: randID, value: newvalue, isComplet: false };
      TodosArray.setTodos((prev) => [...prev, newObject]);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12  col-sm-10 mt-2">
          <input
            dir="rtl"
            class="form-control form-control-xl AddInput shadow-sm py-3 fs-5"
            type="text"
            placeholder="مقداری وارد کنید"
          />
        </div>
        <div className="col-12 col-sm-2 mt-2">
          <button
            onClick={HandleAddTodo}
            className="btn btn-success w-100 shadow-sm py-3 fs-5"
          >
            ذخیره
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
