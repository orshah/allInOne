import React from "react";

function Modal({ open, onClose, onChange, value, btnClick }) {
  if (!open) return null;
  return (
    <div className="overlay flex justify-center">
      <div className=" flex flex-col bg-slate-400 border-solid border-2 border-sky-500">
        <p className=" font-bold self-end cursor-pointer p-2" onClick={onClose}>
          X
        </p>
        <div className="content">
          <input
            onChange={onChange}
            value={value}
            type="text"
            className=" block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={btnClick}
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
