import React, { useState } from "react";

function ApiFetch() {
  const [data, setData] = useState("");
  const [getMovData, setMovData] = useState({});

  const getTheMovieInfo = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${data}&apikey=2cd961ff&`
      );
      const dataMov = await response.json();

      setMovData(dataMov);
      console.log(dataMov);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandler = () => {
    getTheMovieInfo();
  };

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" flex flex-col">
        <label> Input Movie Name</label>
        <input
          value={data}
          onChange={onChangeHandler}
          className=" block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
        />
        <button
          onClick={onClickHandler}
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
        >
          Get The movie
        </button>
      </div>
      <h1>Title: {getMovData.Title}</h1>
      <h1>Year: {getMovData.Year}</h1>
    </div>
  );
}

export default ApiFetch;
