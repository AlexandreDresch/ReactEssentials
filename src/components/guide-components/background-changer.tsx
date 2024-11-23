import { useState, useEffect } from "react";

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: backgroundColor,
        width: "100%",
        padding: "10px 20px",
      }}
    >
      <h1>Background Color Changer</h1>
      <p>
        Current Color: <strong>{backgroundColor}</strong>
      </p>
      <button
        onClick={generateRandomColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default BackgroundChanger;
