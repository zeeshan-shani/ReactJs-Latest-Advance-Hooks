/* eslint-disable no-empty */
// UseMemo Hook
import { useState, useMemo } from "react";

const Hook1 = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //   const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={themeStyle}>
      <h2>useMemo()</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

function slowFunction(num) {
  console.log("This is slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default Hook1;
