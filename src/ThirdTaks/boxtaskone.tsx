import React, { useRef } from "react";

const Boxtaskone: React.FC = () => {
  const squareRef = useRef<HTMLDivElement>(null);

  const changeColor = () => {
    if (squareRef.current) {
      squareRef.current.style.backgroundColor = "gold";
    }
  };

  return (
    <div className="box-task-one">
      <div
        ref={squareRef}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray", 
          margin: "10px",
        }}
      ></div>
      <button onClick={changeColor}  style={{
          height: "20px"
        }}>Change color</button>
    </div>
  );
};

export default Boxtaskone;
