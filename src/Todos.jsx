import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.rtl.min.css";
import { TodosContext } from "./TodosContext";

function Todos(props) {
  const TodosArray = useContext(TodosContext);

  const HandleDelete = (nid) => {
    const mainArr = [...TodosArray.TodoArray]
    const newArr = mainArr.filter((t)=> t.id!==nid)
    TodosArray.setTodos(newArr);
  };

  const HndleChangeIscompleted = (nid) => {
    const itemIndx = TodosArray.TodoArray.findIndex((i) => i.id === nid);
    let newArr = [...TodosArray.TodoArray];
    newArr[itemIndx].isComplet = TodosArray.TodoArray[itemIndx].isComplet
      ? false
      : true;
    TodosArray.setTodos(newArr);
  };
  if (TodosArray.TodoArray.length) {
    return (
      <>
        <div className="row mt-4">
          {TodosArray.TodoArray.map((o, index) => (
            <div key={o.id} className="col-12">
              <div
                className={`mb-3 shadow-sm d-flex align-items-center justify-content-between border rounded px-3 pt- position-relative ${
                  o.isComplet ? "bg-success" : ""
                } `}
              >
                <div>
                  <button
                    className={`btn ${
                      o.isComplet ? "btn-danger" : "btn-outline-danger"
                    }`}
                    onClick={()=> HandleDelete(o.id)}
                  >
                    حذف
                  </button>
                  {o.isComplet ? (
                    <button
                      className="btn btn-warning me-2 text-white"
                      onClick={() => HndleChangeIscompleted(o.id)}
                    >
                      انجام ندادم
                    </button>
                  ) : (
                    <button
                      className="btn btn-success me-2 text-white"
                      onClick={() => HndleChangeIscompleted(o.id)}
                    >
                      انجام دادم
                    </button>
                  )}
                </div>
                <div className="">
                  <p className={`fs-3 mt-2 ${o.isComplet ? "text-light" : ""}`}>
                    {o.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="fs-2 text-muted text-center mt-3">
          چیزی برای نمایش وجود ندارد
        </p>
      </>
    );
  }
}

export default Todos;
