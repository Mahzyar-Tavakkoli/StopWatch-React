import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

export const TodosContext = createContext({
    TodoArray : [],
    setTodos : ()=>{}
})