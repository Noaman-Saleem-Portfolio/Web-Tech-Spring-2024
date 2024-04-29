import React from "react";

const CounterChild = ({ value, setValue, decrement }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-2 p-4">
        <h1 className="text-9xl text-center">{value}</h1>
        <div className="text-center flex justify-around space-x-24">
          <button
            // onClick={increment}
            onClick={() => setValue(value + 1)}
            className="bg-slate-500 mt-2 text-4xl border-2 py-0 hover:bg-slate-700"
          >
            Increment +
          </button>
          <button
            onClick={decrement}
            className="bg-slate-500 mt-2 text-4xl border-2 py-0 hover:bg-slate-700"
          >
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterChild;
