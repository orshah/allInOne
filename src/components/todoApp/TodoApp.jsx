import React from "react";
import { useState } from "react";

function TodoApp() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onClickHandler = () => {
    setToDoList([...toDoList, toDo]);
  };

  const todoListView = toDoList.map((el, id) => {
    return (
      <ol key={id} className=" text-center">
        <li>{el}</li>
      </ol>
    );
  });

  const onChangeHandler = (e) => {
    setToDo(e.target.value);
  };

  return (
    <div className=" flex flex-col">
      <input type="text" onChange={onChangeHandler} value={toDo} />
      <button
        onClick={onClickHandler}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
      >
        Add ToDO
      </button>
      {todoListView}
    </div>
  );
}

export default TodoApp;
