import React from "react";

const Counter = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-2 p-4">
        <h1 className="text-9xl text-center">1</h1>
        <div className="text-center flex justify-around space-x-24">
          <button className="bg-slate-500 mt-2 text-4xl border-2 py-0 hover:bg-slate-700">
            Increment +
          </button>
          <button className="bg-slate-500 mt-2 text-4xl border-2 py-0 hover:bg-slate-700">
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
