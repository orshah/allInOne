import React from "react";

function CssBoxes() {
  return (
    <div className=" grid grid-cols-2 gap-1 w-full ">
      <div className=" border-slate-950 flex flex-wrap w-80 h-80 place-self-center">
        <div className="w-40 h-40 bg-red-600"></div>
        <div className="w-40 h-40 bg-emerald-600"></div>
        <div className="w-40 h-40 bg-fuchsia-400"></div>
        <div className="w-40 h-40 bg-cyan-500"></div>
      </div>
      <div className=" border-slate-950 flex  w-80 h-80 flex-wrap-reverse place-self-start">
        <div className="w-40 h-40 bg-red-700"></div>
        <div className="w-40 h-40 bg-emerald-700"></div>
        <div className="w-40 h-40 bg-yellow-400"></div>
        <div className="w-40 h-40 bg-rose-300"></div>
      </div>
      <div className=" border-slate-950 flex flex-wrap w-80 h-80 place-self-end">
        <div className="w-40 h-40 bg-red-800"></div>
        <div className="w-40 h-40 bg-emerald-800"></div>
        <div className="w-40 h-40 bg-gray-500"></div>
        <div className="w-40 h-40 bg-cyan-700"></div>
      </div>
      <div className=" border-slate-950 flex flex-wrap-reverse w-80 h-80 place-self-center">
        <div className="w-40 h-40 bg-red-900"></div>
        <div className="w-40 h-40 bg-emerald-900"></div>
        <div className="w-40 h-40 bg-yellow-600"></div>
        <div className="w-40 h-40 bg-yellow-700"></div>
      </div>
    </div>
  );
}

export default CssBoxes;
