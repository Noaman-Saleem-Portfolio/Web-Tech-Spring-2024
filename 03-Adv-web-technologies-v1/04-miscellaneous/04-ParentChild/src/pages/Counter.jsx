import { useState } from "react";
import CounterChild from "../components/CounterChild";

const Counter = () => {
  let [value, setValue] = useState(1);

  const increment = (e) => {
    // console.log(e);
    // value = value + 1;
    // console.log(value);

    setValue(value + 1);
  };

  const decrement = () => {
    setValue((previous) => {
      //   console.log(previous);
      return previous - 1;
    });
  };
  return (
    <CounterChild value={value} setValue={setValue} decrement={decrement} />
  );
};

export default Counter;
