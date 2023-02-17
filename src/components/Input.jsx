import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

function Input() {
  const [val, setVal] = useState("");
  const [showText, setShowText] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const click = () => {
    if (val !== "") {
      setShowText(true);
      setShowConfetti(true);
    } else {
      alert("please write your name");
    }
  };

  const change = (event) => {
    setVal(event.target.value);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  return (
    <>
      <input
        onChange={change}
        className="user-input"
        placeholder="write your name..."
        value={val}
      />
      <button onClick={click} className="btn">
        Submit
      </button>

      {showText && <p>Hello {capitalize(val)}!</p>}
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
    </>
  );
}

export default Input;
