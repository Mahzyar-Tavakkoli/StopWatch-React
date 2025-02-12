import React, { useContext, useDebugValue, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AddItem from "./AddItem";
import { ItemContext } from "./ItemContext";

function Timer(props) {
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);
  const [IsStart, setIsStart] = useState(false);
  const [newinterval, changeInterval] = useState(null);
  const [ItemArray, setItemArray] = useState([]);

  const HandleSaveItems = () => {
    const now = document.querySelector(".Timer").innerHTML;
    if (!ItemArray.includes(now)) {
      setItemArray((prev) => [...prev, now]);
    }
  };

  const HandleStopStart = () => {
    if (!IsStart) {
      const interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
      setIsStart(true);
      changeInterval(interval);
    } else {
      clearInterval(newinterval);
      setIsStart(false);
    }
  };

  const HandleReset = () => {
    if (IsStart) {
      clearInterval(newinterval);
      setHour(0);
      setMinute(0);
      setSecond(0);
      setIsStart(false);
    }
  };

  useEffect(() => {
    if (Second === 60) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
  }, [Second]);

  useEffect(() => {
    if (Minute === 60) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
  }, [Minute]);

  return (
    <>
      <ItemContext.Provider
        value={{
          ItemArray,
          setItemArray,
        }}
      >
        <p className="Timer">{`${Hour < 10 ? "0" + Hour : Hour} : ${
          Minute < 10 ? "0" + Minute : Minute
        } : ${Second < 10 ? "0" + Second : Second}`}</p>
        <button
          className="btn"
          style={{
            background: IsStart ? "rgb(255, 98, 0)" : "rgb(49, 209, 94)",
          }}
          onClick={HandleStopStart}
        >
          {IsStart ? "stop" : "start"}
        </button>
        <button
          className="btn"
          style={{ background: "rgb(240, 21, 21)" }}
          onClick={HandleReset}
        >
          reset
        </button>
        <button
          className="btn"
          style={{ background: "rgb(90, 21, 240)" }}
          onClick={HandleSaveItems}
        >
          save
        </button>
        <AddItem />
      </ItemContext.Provider>
    </>
  );
}

export default Timer;
