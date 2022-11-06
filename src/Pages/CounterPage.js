import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const counterFromLocalStorage = Number(localStorage.getItem("counter"));
    if (counterFromLocalStorage) {
      setCounter(counterFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  const setCounterWithValue = (value) => () => {
    setCounter(value);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleUpdateViaInput = () => {
    const value = Number(inputVal);
    if (isNaN(value)) {
      setInputVal("");
    } else {
      setCounter(value);
      setInputVal("");
    }
  };

  return (
    <div lassName="Counter">
      <helmet>
        <title>CounterApp</title>
        <meta name="description" content="CounterApp" />
        <meta name="keywords" content="CounterApp" />
      </helmet>
      <div className="homelink">
        {" "}
        <Link to="/Home">Home</Link>
      </div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <div>
        <input onChange={handleInputChange} value={inputVal} />
        <button onClick={handleUpdateViaInput}>update</button>
      </div>
      <div>
        <button onClick={setCounterWithValue(counter + 1)}>+ 1</button>

        <button onClick={setCounterWithValue(0)}>reset</button>

        <button onClick={setCounterWithValue(counter - 1)}>- 1</button>
      </div>
    </div>
  );
}

export default Counter;
