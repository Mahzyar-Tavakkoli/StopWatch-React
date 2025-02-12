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
        <p
          className="Added-Item"
          onClick={() => HandleDeleteByClick(index)}
          key={index}
        >
          {i}
        </p>
      ))}
    </div>
  );
}

export default AddItem;
