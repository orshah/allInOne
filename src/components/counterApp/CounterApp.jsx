import React from "react";
import { useState } from "react";
import "./counterApp.style.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const onClickHandlerPlus = () => {
    if (count + 10 <= 100) {
      setCount(count + 10);
    }
  };
  const onClickHandlerMinus = () => {
    if (count - 10 >= 0) {
      setCount(count - 10);
    }
  };

  return (
    <div className="counter-App__container">
      <div className="counter-App__box">
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
          onClick={onClickHandlerMinus}
        >
          -10
        </button>
        <h1 className="lining-nums text-4xl">{count}</h1>
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
          onClick={onClickHandlerPlus}
        >
          +10
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
