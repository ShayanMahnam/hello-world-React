import React, { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import capitalize from "../helperFunctions/capitalize";

function Input() {
  const [val, setVal] = useState("");
  const [name, setName] = useState('')
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

  

  const handleClick = () => {
    if (val !== "") {
      setShowText(true);
      setShowConfetti(true);
      setVal('')
    } else {
      alert("please write your name");
    }
  };

  const handleChange = (event) => {
    setVal(event.target.value);
    setName(event.target.value);
    setShowText(false)
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  return (
    <>
      <input
        onChange={handleChange}
        className="user-input"
        placeholder="write your name..."
        value={val}
      />
      <button onClick={handleClick} className="btn">
        Submit
      </button>

      {showText && <p>Hello {capitalize(name)}!</p>}
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
    </>
  );
}

export default Input;
