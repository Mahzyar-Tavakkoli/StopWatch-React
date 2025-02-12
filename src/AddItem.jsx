import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ItemContext } from "./ItemContext";

function AddItem(props) {
  const ItemObject = useContext(ItemContext);

  const HandleDeleteByClick = (index) => {
    const newArr = ItemObject.ItemArray.filter((_, i) => i !== index);
    ItemObject.setItemArray(newArr);
  };
  return (
    <div>
      {ItemObject.ItemArray.map((i, index) => (
        <p onClick={() => HandleDeleteByClick(index)} key={index}>
          {index+1 + " " + i}
        </p>
      ))}
    </div>
  );
}

export default AddItem;
