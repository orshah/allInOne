import React from "react";
import { useState } from "react";
import "./counterApp.style.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const onClickHandlerPlus = () => {
    setCount(count + 10);
  };
  const onClickHandlerMinus = () => {
    setCount(count - 10);
  };

  return (
    <div className="counter-App__container">
      <div className="counter-App-box">
        <button onClick={onClickHandlerMinus}>-10</button>
        <h1>{count}</h1>
        <button onClick={onClickHandlerPlus}>+10</button>
      </div>
    </div>
  );
}

export default CounterApp;
