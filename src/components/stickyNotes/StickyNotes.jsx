import React, { useState } from "react";
import Btn from "../../img/button.jpg";
import Modal from "./Modal";

function StickyNotes() {
  const [inputModal, setInputModal] = useState(false);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const onClickHandler = () => {
    setNotes([...notes, note]);
    setNote("");
  };

  const onChangeHandler = (e) => {
    setNote(e.target.value);
  };
  console.log(note);

  return (
    <div className="  ">
      <div className=" flex">
        <div className=" flex flex-row flex-wrap gap-2 ">
          {notes.map((el) => {
            return (
              <div className=" flex border-solid border-2 border-sky-500 w-[250px] h-[250px] overflow-auto px-3 break-all">
                {el}
              </div>
            );
          })}
          <label htmlFor="addNote">
            <img
              src={Btn}
              alt="plus button"
              className=" w-[250px] h-[250px] cursor-pointer"
            />
          </label>
          <button id="addNote" onClick={() => setInputModal(true)}></button>
        </div>
      </div>
      <Modal
        open={inputModal}
        onClose={() => setInputModal(false)}
        onChange={onChangeHandler}
        value={note}
        btnClick={onClickHandler}
      />
    </div>
  );
}

export default StickyNotes;
