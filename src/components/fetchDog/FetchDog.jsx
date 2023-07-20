import React from "react";
import { useState, useEffect } from "react";

function FetchDog() {
  const [dog, setDog] = useState("");
  const [bigDog, setBigDog] = useState([]);
  const [smallDog, setSmallDog] = useState([]);

  useEffect(() => {
    getTheDog();
  }, []);

  const onClickHandler = () => {
    getTheDog();
  };

  const getTheDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDog(data.message);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const showBigDog = bigDog.map((el, key) => {
    return (
      <div key={key}>
        <img src={el} alt="big doggo" className=" w-[300px] h-[300px] my-3" />
      </div>
    );
  });

  const showSmallDog = smallDog.map((el, key) => {
    return (
      <div key={key}>
        <img src={el} alt="small doggo" className=" w-[300px] h-[300px] my-3" />
      </div>
    );
  });

  const onClickHandlerSmall = () => {
    setSmallDog([dog, ...smallDog]);
  };

  const onClickHandlerBig = () => {
    setBigDog([dog, ...bigDog]);
  };

  return (
    <div className=" flex flex-col items-center ">
      <div className=" flex flex-col items-center">
        <img src={dog} alt="dog" className=" w-[300px] h-[300px]" />
        <div className=" flex gap-3">
          <button
            className="flex w-[300px] justify-center rounded-md text-sm bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
            onClick={onClickHandler}
          >
            Get the dog
          </button>
          <button
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
            onClick={onClickHandlerBig}
          >
            Big
          </button>
          <button
            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
            onClick={onClickHandlerSmall}
          >
            Small
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-10 ">
        <div>
          <h1 className=" text-center font-medium text-3xl">Big Dog</h1>
          {/* <img src={bigDog} alt="big dog"></img> */}
          {showBigDog}
        </div>
        <div>
          <h1 className=" text-center font-medium text-3xl">Small dog</h1>
          {/* <img src={smallDog} alt="big dog"></img> */}
          {showSmallDog}
        </div>
      </div>
    </div>
  );
}

export default FetchDog;

// const [dogList, setDogList] = useState([]);

// const getThedog = async () => {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();
//     setDogList([...dogList, data.message]);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const showDogList = dogList.map((el, index) => {
//   return (
//     <div key={index}>
//       <img src={el} alt="dogs" className=" w-40 h-40 gap-3 rounded-md" />
//     </div>
//   );
// });

// const onClickHandler = () => {
//   getThedog();
// };

// return (
//   <div className=" flex justify-center flex-col">
//     <button
//       className="flex mx-5 justify-around rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
//       onClick={onClickHandler}
//     >
//       LET THE DOG OUT
//     </button>
//     <div className=" flex flex-wrap gap-2 mx-5 justify-around">
//       {showDogList}
//     </div>
//   </div>
// );
