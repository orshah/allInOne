import React from "react";
import { useState } from "react";

function TodoApp() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onClickHandler = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: toDo,
    };
    console.log(newTodo.id);
    setToDoList([...toDoList, newTodo]);
  };

  const onDeleteHandler = (id) => {
    const updatedTodo = toDoList.filter((todo) => todo.id !== id);
    setToDoList(updatedTodo);
  };

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
      {toDoList.map((el) => (
        <div className=" flex flex-row gap-1" key={el.id}>
          <p>{el.text}</p>
          <button onClick={() => onDeleteHandler(el.id)}>🪣</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
