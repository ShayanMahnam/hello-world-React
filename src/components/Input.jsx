import { useState } from "react";

function Input() {
  const [val, setVal] = useState("");
  const click = () => {
    alert(`Hello ${val}`)
  }

  const change = event => {
    setVal(event.target.value)
  }


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
    </>
  );
}

export default Input