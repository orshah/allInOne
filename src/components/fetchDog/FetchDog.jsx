import React from "react";
import { useState } from "react";

function FetchDog() {
  const [dogList, setDogList] = useState([]);

  const getThedog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogList([...dogList, data.message]);
    } catch (error) {
      console.log(error);
    }
  };

  const showDogList = dogList.map((el, index) => {
    return (
      <div key={index}>
        <img src={el} alt="dogs" className=" w-40 h-40 gap-3" />
      </div>
    );
  });

  const onClickHandler = () => {
    getThedog();
  };

  return (
    <div className=" flex justify-center flex-col">
      <button
        className="flex mx-5 justify-around rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
        onClick={onClickHandler}
      >
        Let The Dog OUT
      </button>
      <div className=" flex flex-wrap gap-2 mx-5 justify-around">
        {showDogList}
      </div>
    </div>
  );
}

export default FetchDog;
