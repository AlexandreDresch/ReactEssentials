import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "#FFFFFF" }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Counter;
